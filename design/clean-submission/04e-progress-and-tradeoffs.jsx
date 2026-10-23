(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '28px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '56px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}>
          Progress, tradeoff and next test
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1280px' }}>
          Opening a file leaves its review status alone. Mark viewed updates the file and count; Undo restores both.
        </div>
      </div>
      <div style={{ alignItems: 'center', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', paddingBottom: '20px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', width: '1200px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '32px', lineHeight: '44px' }}>
              0 / 7
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '22px' }}>
              →
            </div>
            <div style={{ boxSizing: 'border-box', color: '#175C3C', fontFamily: 'system-ui, sans-serif', fontSize: '32px', lineHeight: '44px' }}>
              1 / 7 viewed
            </div>
            <div style={{ backgroundColor: '#211F24', borderRadius: '4px', boxSizing: 'border-box', paddingBlock: '10px', paddingInline: '16px' }}>
              <div style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: 'system-ui, sans-serif', fontSize: '24px', lineHeight: '32px' }}>
                Undo
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '32px', lineHeight: '44px' }}>
              → 0 / 7
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '20px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', width: '350px' }}>
          The tradeoff
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1280px' }}>
          I kept one code pane: caller and guard side by side felt cramped. Files and summaries still cost space, so Focus stays available.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', width: '1200px' }}>
          What I would test
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', width: '1280px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1280px' }}>
            Ask developers to explain the access check on both screens and find something the summary might miss.
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1280px' }}>
            If smaller highlights cause missed code, widen the range or reduce the emphasis.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '26px', paddingTop: '24px' }}>
        Not tested with developers. Seven of 52 diffs; manual code links. The merged PR keeps Submit disabled. This work exceeded the original 1–2 hour timebox.
      </div>
    </div>
  )