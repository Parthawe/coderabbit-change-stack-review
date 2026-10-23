(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '32px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '64px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', width: '1100px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '54px' }}>
          How I made a summary easier to check.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          CodeRabbit Change Stack · Formbricks PR #8650 · Parth Pawar
        </div>
      </div>
      <div style={{ borderBottomColor: '#E3E0E7', borderBottomStyle: 'solid', borderBottomWidth: '1px', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '56px', paddingBlock: '28px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '540px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}>
            The assignment
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
            Make the PR review screen easier to scan and use. Keep the layer model and explain the design decisions.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '640px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}>
            The task I chose
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
            Check the workspace-access summary against its code, follow the guard into another file, then return to the call.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '28px', fontWeight: 600, lineHeight: '36px' }}>
          How I looked at it
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '1120px' }}>
          I wanted to understand what already worked before changing the screen. CodeRabbit already has summary jumps, Unified, Focus and viewed status. I kept those and worked on following a summary into the code, then finding my way back.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          1
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Start with the actual review
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          I used the Formbricks PR to follow one access check. I kept its code and source wording, and marked where my prototype stops.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          2
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Decide what to change
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          I explored starting from behavior, counterexamples, impact and author handoff. I chose M because I could improve this review task while keeping layers.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          3
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Check the comparison
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          I put both screens in Unified at the same size and line. The original shows more code. I need to test whether visible files and summary links are worth that space.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px' }}>
          Next: How I chose M → Problem & fair comparison → M final design → Interaction details → Decisions & next test.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
          Paper contains the editable design and reasoning. The browser prototype demonstrates the interactions. This work expanded beyond the assignment’s original 1–2 hour timebox.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font' }}>
          Try the access-check prototype
        </div>
      </div>
    </div>
  )
