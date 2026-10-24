(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '36px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          04 / How it behaves
        </div>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '100%' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
            <path d="m8 5-5 5 5 5M3 10h12a6 6 0 0 1 0 12h-3" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ boxSizing: 'border-box', color: '#000000', flex: 1, flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '56px', minWidth: '0px' }}>
            Keep my place while I review.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          Leaving the code shouldn’t mean finding my place again. Marking a file viewed should be easy to undo.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', columnGap: '64px', display: 'flex', flexWrap: 'wrap', rowGap: '32px', width: '1280px' }}>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', minHeight: '0px', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            access.ts · L57–65
          </div>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '100%' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
              <path d="m8 5-5 5 5 5M3 10h12a6 6 0 0 1 0 12h-3" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ boxSizing: 'border-box', color: '#17151A', flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', minWidth: '0px' }}>
              Inspect guard → Return
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            Open feedback-access.ts, then return to the same place in access.ts.
          </div>
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flex: 1, flexBasis: '0%', flexDirection: 'column', flexGrow: '1', flexShrink: '0', gap: '16px', height: 'fit-content', minHeight: '0px', paddingBlock: '24px', width: '608px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px', width: '608px' }}>
            0 / 7 files viewed
          </div>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '12px', width: '100%' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
              <path d="M14 2H5v20h14V7zM14 2v5h5" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m8 14 3 3 5-6" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ boxSizing: 'border-box', color: '#17151A', flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '36px', minWidth: '0px' }}>
              Mark viewed → Undo
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#3F3C44', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '32px', width: '608px' }}>
            Mark viewed adds this file to progress. Undo removes it. Opening a file alone changes nothing.
          </div>
        </div>
      </div>
    </div>
  )
