// Transactional email bodies. Bundled here (not read from /public at runtime)
// so they work reliably on serverless hosts. Design follows the brand card
// template in public/nexus-email-templates — copper top edge, serif wordmark,
// copper quote block, signature — but with no remote image (keeps it from
// breaking and helps deliverability).

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

/**
 * Sent to the person who submits the free-teardown form: confirms it arrived,
 * that we'll be in touch, and that we'll review their site.
 */
export function confirmationEmail({ firstName }: { firstName?: string }) {
  const hi = firstName ? `Hi ${esc(firstName)},` : "Hi there,";
  const subject = "We've got your free teardown request ✓";

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f0e6;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4f0e6;margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:14px;border:1px solid #e8e4da;overflow:hidden;">
            <!-- copper top edge -->
            <tr><td style="height:4px;background-color:#b7472a;font-size:0;line-height:0;">&nbsp;</td></tr>
            <!-- header: logo + wordmark. PNG (not SVG) because email clients
                 don't render SVG; the URL must be absolute and live in public/. -->
            <tr>
              <td style="padding:28px 36px 0 36px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right:12px;vertical-align:middle;">
                      <img src="https://nexuslabsystems.com/email-logo.png" width="34" height="34" alt="Nexus Lab Systems" style="display:block;width:34px;height:34px;border:0;" />
                    </td>
                    <td style="vertical-align:middle;font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:bold;color:#191712;letter-spacing:0.2px;">
                      Nexus Lab Systems
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- divider -->
            <tr>
              <td style="padding:20px 36px 0 36px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="height:1px;background-color:#e8e4da;font-size:0;line-height:0;">&nbsp;</td></tr></table>
              </td>
            </tr>
            <!-- body -->
            <tr>
              <td style="padding:26px 36px 8px 36px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
                <p style="font-size:15px;line-height:1.65;color:#191712;margin:0 0 16px 0;">${hi}</p>
                <p style="font-size:15px;line-height:1.65;color:#191712;margin:0 0 18px 0;">
                  Thanks for requesting your free website teardown — this is just to confirm it came through <strong>successfully</strong>.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 20px 0;">
                  <tr>
                    <td style="background-color:#f9f7f1;border-left:3px solid #b7472a;padding:16px 18px;border-radius:0 8px 8px 0;">
                      <p style="font-size:14px;line-height:1.6;color:#4a453c;margin:0;">
                        We'll take a proper look at your website and get back to you <strong>as soon as possible</strong> — with a short video showing what's quietly costing you customers, and how we'd fix it.
                      </p>
                    </td>
                  </tr>
                </table>
                <p style="font-size:15px;line-height:1.65;color:#191712;margin:0 0 18px 0;">
                  There's nothing else you need to do — we'll be in touch at this email address. If there's anything specific you'd like us to look at, just reply to this email.
                </p>
                <p style="font-size:15px;line-height:1.65;color:#191712;margin:0 0 2px 0;">Speak soon,</p>
                <p style="font-size:15px;line-height:1.65;color:#191712;margin:0;">Mohammad Jawad</p>
              </td>
            </tr>
            <!-- footer signature -->
            <tr>
              <td style="padding:20px 36px 26px 36px;background-color:#faf8f3;border-top:1px solid #e8e4da;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
                <p style="font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:bold;color:#191712;margin:0 0 2px 0;line-height:1.3;">Mohammad Jawad</p>
                <p style="font-size:12px;color:#8a8578;margin:0 0 10px 0;line-height:1.4;">Founder · <span style="color:#1c2630;font-weight:bold;">Nexus Lab Systems</span></p>
                <p style="font-size:12px;line-height:1.7;margin:0;">
                  <a href="mailto:contact@nexuslabsystems.com" style="color:#191712;text-decoration:none;">contact@nexuslabsystems.com</a><br/>
                  <a href="https://nexuslabsystems.com" style="color:#b7472a;text-decoration:none;font-weight:bold;">nexuslabsystems.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `${firstName ? `Hi ${firstName},` : "Hi there,"}

Thanks for requesting your free website teardown — this is just to confirm it came through successfully.

We'll take a proper look at your website and get back to you as soon as possible, with a short video showing what's quietly costing you customers and how we'd fix it.

There's nothing else you need to do — we'll be in touch at this email address. If there's anything specific you'd like us to look at, just reply to this email.

Speak soon,
Mohammad Jawad
Founder · Nexus Lab Systems
contact@nexuslabsystems.com
https://nexuslabsystems.com`;

  return { subject, html, text };
}
