(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '36px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          04 / Interactions, tradeoffs and next checks
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '56px' }}>
          Keep the reviewer’s place.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          The action should change what I ask it to change. Reading, navigating and marking progress have different jobs.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', columnGap: '64px', display: 'flex', flexWrap: 'wrap', rowGap: '32px', width: '1280px' }}>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            Summary collapsed
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Expand summary → read in place
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            The explanation opens in place. The file, code scroll position and selected statement stay unchanged.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            Reading the explanation · Normalize tenant IDs
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Select a statement → inspect L75
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            The code scrolls to L75 and that statement is highlighted. Whole function stays available for context.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            access.ts · L57–65
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Inspect guard → Return
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            Inspect feedback-access.ts, then return to the same caller, line and reading position.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            Code with both side panels
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Focus Z → Z again
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            Side panels hide, then return. Keep the same file and code position; ignore shortcuts while typing.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            0 / 7 files viewed
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Mark viewed → Undo
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            1 / 7 viewed, then 0 / 7. Opening a file or marking a summary seen never changes this count.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            Resolved finding collapsed
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', width: '608px' }}>
            Expand thread → inspect L75–90
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            The thread opens and code moves to L75–90. Read the Major finding as resolved history. Closing the thread keeps that code position; local notes stay separate.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', paddingTop: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px' }}>
          These interactions are demonstrated in the prototype. I haven’t tested them with developers yet.
        </div>
      </div>
    </div>
  )