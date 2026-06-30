import { Resend } from "resend";
import { NextResponse } from "next/server";

// TODO: dopo la verifica del dominio air-next.it in Resend, cambiare in:
// const FROM = "Air-next <noreply@air-next.it>";
const FROM = "Air-next <onboarding@resend.dev>";
// TODO: dopo la verifica del dominio air-next.it in Resend, cambiare in:
// const TO = "info@air-next.it";
const TO = "amministrazione@air-next.it";

export async function POST(request: Request) {
  // Istanziato qui (non a module-level) per non bloccare la build con chiave vuota
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const { nome, azienda, email, telefono, servizio, messaggio } = body;

  if (!nome?.trim() || !azienda?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Nome, azienda ed email sono obbligatori." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Indirizzo email non valido." }, { status: 400 });
  }

  const subject = servizio
    ? `Nuova richiesta — ${servizio} — ${nome} (${azienda})`
    : `Nuova richiesta da ${nome} (${azienda})`;

  const html = `
    <table style="font-family:sans-serif;font-size:14px;color:#1a1d36;max-width:600px;width:100%">
      <tr><td style="padding:32px 0 16px">
        <h2 style="margin:0;font-size:20px">Nuova richiesta dal sito Air-next</h2>
      </td></tr>
      <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Nome</strong><br>${escHtml(nome)}
      </td></tr>
      <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Azienda</strong><br>${escHtml(azienda)}
      </td></tr>
      <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Email</strong><br><a href="mailto:${escHtml(email)}">${escHtml(email)}</a>
      </td></tr>
      ${telefono ? `<tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Telefono</strong><br>${escHtml(telefono)}
      </td></tr>` : ""}
      ${servizio ? `<tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Servizio di interesse</strong><br>${escHtml(servizio)}
      </td></tr>` : ""}
      ${messaggio ? `<tr><td style="padding:8px 0;border-top:1px solid #e5e7eb">
        <strong>Messaggio</strong><br><span style="white-space:pre-wrap">${escHtml(messaggio)}</span>
      </td></tr>` : ""}
    </table>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Errore durante l'invio. Riprova o contattaci direttamente a info@air-next.it." },
      { status: 500 }
    );
  }
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
