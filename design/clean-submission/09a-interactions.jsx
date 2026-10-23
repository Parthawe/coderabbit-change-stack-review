(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '28px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          09 / Interactions, tradeoffs and next checks
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '42px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '50px' }}>
          Keep the reviewer’s place.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          The action should change what I ask it to change. Reading, navigating and marking progress have different jobs.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '28px', paddingTop: '16px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', width: '340px' }}>
          BEFORE
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', width: '300px' }}>
          ACTION
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', width: '580px' }}>
          AFTER / WHAT STAYS
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          Summary collapsed
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Expand summary
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          The explanation opens in place. The file, code scroll position and selected statement stay unchanged.
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          Reading the explanation
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Select Normalize tenant IDs · L75
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          The code scrolls to L75 and that statement is highlighted. Whole function stays available for context.
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          access.ts · L57–65
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Inspect guard → Return
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          Inspect feedback-access.ts, then return to the same caller, line and reading position.
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          0 / 7 files viewed
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Mark viewed → Undo
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          1 / 7 viewed, then 0 / 7. Opening a file or marking a summary seen never changes this count.
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          Resolved finding collapsed
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Expand the thread
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          The thread opens and code moves to L75–90. Read the Major finding as resolved history. Closing the thread keeps that code position; local notes stay separate.
        </div>
      </div>
      <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '22px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '30px', width: '340px' }}>
          Code with both side panels
        </div>
        <div style={{ boxSizing: 'border-box', color: '#83411F', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '300px' }}>
          Focus Z → Z again
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '580px' }}>
          Side panels hide, then return. Keep the same file and code position; ignore shortcuts while typing.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', paddingTop: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px' }}>
          These are the intended interaction contracts, demonstrated in the prototype. They are not usability-test results.
        </div>
      </div>
    </div>
  )
