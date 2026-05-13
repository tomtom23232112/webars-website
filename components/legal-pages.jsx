// ─── Shared Legal Page Layout ─────────────────────────────────────────────────
function LegalPage({ title, subtitle, children }) {
  return (
    <main>
      <div style={{ paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', padding: 'calc(var(--nav-h) + 80px) clamp(24px,6vw,80px) 100px' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>{ '{ Legal }' }</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,7vw,96px)', lineHeight: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>{subtitle}</p>}
        <div className="legal-body">{children}</div>
      </div>
    </main>
  );
}

function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(17px,1.6vw,21px)', fontWeight: 700, marginBottom: '0.9rem', color: 'var(--text)' }}>{title}</h2>
      <div style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}

// ─── Impressum ────────────────────────────────────────────────────────────────
function ImpressumPage() {
  return (
    <LegalPage title="Impressum" subtitle="Angaben gemäß § 5 ECG (Österreich) und § 5 TMG (Deutschland)">
      <LegalSection title="Unternehmensangaben">
        <p><strong style={{ color: 'var(--text)' }}>WebArs GmbH</strong></p>
        <p>Tower 9, Wiedner Gürtel 13</p>
        <p>1100 Wien, Österreich</p>
        <br />
        <p><strong style={{ color: 'var(--text)' }}>Deutschlandbüro:</strong></p>
        <p>Spaces Omniturm, Große Gallusstraße 16–18</p>
        <p>60312 Frankfurt am Main, Deutschland</p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>Telefon: <a href="tel:+436703061078" style={{ color: 'var(--accent)' }}>+43 670 3061078</a></p>
        <p>E-Mail: <a href="mailto:contact@webars.at" style={{ color: 'var(--accent)' }}>contact@webars.at</a></p>
        <p>Web: <a href="https://webars.at" style={{ color: 'var(--accent)' }}>webars.at</a></p>
      </LegalSection>

      <LegalSection title="Unternehmensregister">
        <p>Firmenbuchnummer: FN 123456 x</p>
        <p>Firmenbuchgericht: Handelsgericht Wien</p>
        <p>UID-Nummer: ATU12345678</p>
        <p>EORI: [sofern vorhanden]</p>
      </LegalSection>

      <LegalSection title="Geschäftsführung">
        <p>Geschäftsführer: [Name des Geschäftsführers]</p>
      </LegalSection>

      <LegalSection title="Zuständige Aufsichtsbehörde">
        <p>Magistrat der Stadt Wien</p>
        <p>Wirtschaftskammer Wien — Fachgruppe Werbung und Marktkommunikation</p>
      </LegalSection>

      <LegalSection title="Berufsrecht">
        <p>Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO) der Republik Österreich</p>
        <p>Berufsbezeichnung: Werbeagentur, IT-Dienstleistung (verliehen in Österreich)</p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann WebArs GmbH jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich.
        </p>
        <br />
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

// ─── Datenschutz ──────────────────────────────────────────────────────────────
function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz" subtitle="Datenschutzerklärung gemäß DSGVO (EU) 2016/679 — Stand: Mai 2025">
      <LegalSection title="Verantwortlicher">
        <p>WebArs GmbH, Tower 9, Wiedner Gürtel 13, 1100 Wien</p>
        <p>E-Mail: <a href="mailto:datenschutz@webars.at" style={{ color: 'var(--accent)' }}>datenschutz@webars.at</a></p>
      </LegalSection>

      <LegalSection title="Welche Daten wir erheben">
        <p><strong style={{ color: 'var(--text)' }}>Kontaktformular:</strong> Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten gespeichert: Name, E-Mail-Adresse, Telefonnummer (optional), Nachrichteninhalt, Zeitstempel.</p>
        <br />
        <p><strong style={{ color: 'var(--text)' }}>Server-Logfiles:</strong> Beim Besuch unserer Website erfasst unser Hoster automatisch Informationen wie IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs.</p>
        <br />
        <p><strong style={{ color: 'var(--text)' }}>Newsletter:</strong> Bei Anmeldung zum Newsletter: E-Mail-Adresse und Zeitstempel der Anmeldung (Double-Opt-In).</p>
      </LegalSection>

      <LegalSection title="Zweck der Datenverarbeitung">
        <p>Wir verarbeiten Ihre Daten ausschließlich zu folgenden Zwecken:</p>
        <br />
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            'Beantwortung Ihrer Anfragen und Kommunikation',
            'Vertragsanbahnung und Vertragserfüllung',
            'Versand des Newsletters (mit ausdrücklicher Einwilligung)',
            'Verbesserung unseres Webangebots',
            'Erfüllung rechtlicher Verpflichtungen',
          ].map(item => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Rechtsgrundlagen">
        <p>Die Verarbeitung Ihrer Daten erfolgt auf Basis folgender Rechtsgrundlagen gemäß Art. 6 DSGVO:</p>
        <br />
        <p><strong style={{ color: 'var(--text)' }}>Art. 6 Abs. 1 lit. a DSGVO</strong> — Einwilligung (z.B. Newsletter)</p>
        <p><strong style={{ color: 'var(--text)' }}>Art. 6 Abs. 1 lit. b DSGVO</strong> — Vertragserfüllung und vorvertragliche Maßnahmen</p>
        <p><strong style={{ color: 'var(--text)' }}>Art. 6 Abs. 1 lit. f DSGVO</strong> — Berechtigte Interessen (z.B. Sicherheit, Logfiles)</p>
      </LegalSection>

      <LegalSection title="Speicherdauer">
        <p>
          Wir speichern Ihre Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder
          gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach 3 Jahren gelöscht,
          sofern kein Vertragsverhältnis entstanden ist. Buchhaltungsrelevante Daten werden gemäß
          österreichischer Bundesabgabenordnung (BAO) 7 Jahre aufbewahrt.
        </p>
      </LegalSection>

      <LegalSection title="Weitergabe an Dritte">
        <p>
          Wir geben Ihre Daten nicht an Dritte weiter, außer es ist für die Vertragserfüllung notwendig
          (z.B. Hosting-Anbieter, Zahlungsdienstleister) oder wir sind gesetzlich dazu verpflichtet.
          Alle Auftragsverarbeiter wurden gemäß Art. 28 DSGVO vertraglich gebunden.
        </p>
        <br />
        <p><strong style={{ color: 'var(--text)' }}>Eingesetzte Dienste (Auswahl):</strong></p>
        <p>Vercel Inc. (Hosting, USA — SCC-Vertrag) · Framer Inc. (Website-Editor) · Calendly (Terminbuchung)</p>
      </LegalSection>

      <LegalSection title="Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <br />
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            'Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)',
            'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
            'Löschung Ihrer Daten (Art. 17 DSGVO)',
            'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
            'Datenübertragbarkeit (Art. 20 DSGVO)',
            'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
            'Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)',
          ].map(item => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <br />
        <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:datenschutz@webars.at" style={{ color: 'var(--accent)' }}>datenschutz@webars.at</a></p>
        <br />
        <p>Sie haben außerdem das Recht, bei der österreichischen Datenschutzbehörde (dsb.gv.at) Beschwerde einzulegen.</p>
      </LegalSection>
    </LegalPage>
  );
}

// ─── AGB ──────────────────────────────────────────────────────────────────────
function AGBPage() {
  return (
    <LegalPage title="AGB" subtitle="Allgemeine Geschäftsbedingungen der WebArs GmbH — Stand: Mai 2025">
      <LegalSection title="§ 1 Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der WebArs GmbH
          (nachfolgend „WebArs") und ihren Auftraggebern (nachfolgend „Kunde") über die Erbringung von
          Webdesign-, KI-Automatisierungs- und Online-Marketing-Leistungen. Abweichende Bedingungen des
          Kunden gelten nur, wenn WebArs diesen ausdrücklich schriftlich zugestimmt hat.
        </p>
      </LegalSection>

      <LegalSection title="§ 2 Vertragsschluss">
        <p>
          Ein Vertrag kommt durch die schriftliche Auftragsbestätigung von WebArs oder durch Beginn der
          Leistungserbringung zustande. Angebote von WebArs sind freibleibend und unverbindlich, sofern
          sie nicht ausdrücklich als verbindlich bezeichnet wurden. Die Angebotsgültigkeit beträgt 30 Tage
          ab Ausstellungsdatum.
        </p>
      </LegalSection>

      <LegalSection title="§ 3 Leistungsumfang">
        <p>
          Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der Leistungsbeschreibung.
          Änderungen und Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung und
          können zu einer Anpassung von Preis und Lieferzeitplan führen (Change Request Verfahren).
        </p>
        <br />
        <p>
          WebArs erbringt Leistungen nach aktuellem Stand der Technik. Technische Änderungen durch
          Drittanbieter (z.B. Google, Meta, OpenAI) liegen außerhalb des Einflussbereichs von WebArs
          und begründen keinen Mangel.
        </p>
      </LegalSection>

      <LegalSection title="§ 4 Mitwirkungspflichten des Kunden">
        <p>
          Der Kunde ist verpflichtet, WebArs alle zur Leistungserbringung notwendigen Informationen,
          Zugangsdaten und Materialien rechtzeitig zur Verfügung zu stellen. Verzögerungen durch
          verspätete Mitwirkung des Kunden gehen nicht zu Lasten von WebArs und können zur Anpassung
          von Lieferterminen und/oder Mehrkosten führen.
        </p>
      </LegalSection>

      <LegalSection title="§ 5 Vergütung und Zahlungsbedingungen">
        <p>
          Alle Preise verstehen sich in Euro, netto zuzüglich der gesetzlichen Mehrwertsteuer.
          Einmalige Projektleistungen werden wie folgt abgerechnet: 50% Anzahlung bei Auftragserteilung,
          50% bei Projektabschluss bzw. Auslieferung. Monatliche Leistungen (SEO, Betreuung) sind im
          Voraus zum Monatsersten fällig.
        </p>
        <br />
        <p>
          Bei Zahlungsverzug ist WebArs berechtigt, Verzugszinsen in Höhe von 8 Prozentpunkten über
          dem Basiszinssatz zu berechnen sowie die weitere Leistungserbringung bis zum Ausgleich
          offener Beträge auszusetzen.
        </p>
      </LegalSection>

      <LegalSection title="§ 6 Lieferfristen">
        <p>
          Lieferzeitangaben sind unverbindliche Richtwerte. Verbindliche Liefertermine bedürfen der
          ausdrücklichen schriftlichen Vereinbarung. WebArs ist bei höherer Gewalt, technischen Störungen
          sowie verspäteter Mitwirkung des Kunden von der Einhaltung vereinbarter Fristen entbunden.
        </p>
      </LegalSection>

      <LegalSection title="§ 7 Abnahme und Mängelrüge">
        <p>
          Nach Fertigstellung ist der Kunde verpflichtet, die Leistung innerhalb von 10 Werktagen zu
          prüfen und allfällige Mängel schriftlich zu rügen. Mängel, die innerhalb dieser Frist nicht
          gemeldet werden, gelten als akzeptiert. WebArs hat das Recht zur Nachbesserung; schlägt diese
          zweimal fehl, kann der Kunde Preisminderung oder Vertragsrücktritt verlangen.
        </p>
      </LegalSection>

      <LegalSection title="§ 8 Nutzungsrechte und Urheberrecht">
        <p>
          Mit vollständiger Bezahlung überträgt WebArs dem Kunden ein einfaches, zeitlich unbefristetes
          Nutzungsrecht an den erstellten Werken für den vereinbarten Verwendungszweck. Das Urheberrecht
          verbleibt bei WebArs. Eine Weiterlizenzierung oder Veräußerung der Werke durch den Kunden
          bedarf der schriftlichen Zustimmung von WebArs.
        </p>
        <br />
        <p>
          WebArs behält das Recht, die erstellten Arbeiten zu Referenzzwecken in Portfolio und Marketing
          zu verwenden, sofern keine ausdrückliche Vertraulichkeitsvereinbarung besteht.
        </p>
      </LegalSection>

      <LegalSection title="§ 9 Haftungsbeschränkung">
        <p>
          WebArs haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit
          ist — soweit gesetzlich zulässig — ausgeschlossen. Die Haftung ist auf die Höhe des
          Auftragswertes begrenzt. WebArs haftet nicht für mittelbare Schäden, entgangenen Gewinn oder
          Datenverlust, der nicht auf grob fahrlässigem oder vorsätzlichem Handeln beruht.
        </p>
      </LegalSection>

      <LegalSection title="§ 10 Vertraulichkeit">
        <p>
          Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen
          Informationen der anderen Partei nicht an Dritte weiterzugeben und nur für die Zwecke des
          jeweiligen Projekts zu verwenden. Diese Verpflichtung gilt auch nach Beendigung des
          Vertragsverhältnisses.
        </p>
      </LegalSection>

      <LegalSection title="§ 11 Kündigung">
        <p>
          Laufende Serviceverträge (SEO, Betreuung) können von beiden Seiten mit einer Frist von
          30 Tagen zum Monatsende gekündigt werden. Projektverträge können vor Projektbeginn ohne
          Kosten, danach nur gegen Erstattung der bis dahin erbrachten Leistungen storniert werden.
          Bei Kündigung aus wichtigem Grund gelten die gesetzlichen Bestimmungen.
        </p>
      </LegalSection>

      <LegalSection title="§ 12 Anwendbares Recht und Gerichtsstand">
        <p>
          Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand für
          alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Wien, Österreich, sofern
          der Kunde Unternehmer im Sinne des UGB ist. Für Verbraucher gelten die gesetzlichen
          Zuständigkeitsregelungen.
        </p>
      </LegalSection>

      <LegalSection title="§ 13 Salvatorische Klausel">
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden,
          berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung wird
          durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
          nächsten kommt.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

Object.assign(window, { ImpressumPage, DatenschutzPage, AGBPage });
