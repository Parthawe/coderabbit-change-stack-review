(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', width: '1280px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '52px' }}>
          Keep your place while reviewing.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          CodeRabbit Change Stack · Formbricks #8650 · Parth Pawar
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1280px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
            01{'  '}The task
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '38px', width: '1260px' }}>
            Make a 52-file, 7-layer review easier to follow while keeping its capabilities.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}>
        02 What I noticed
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Too much to search
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          Six summary points lead to the same 82 lines. Each needs a clearer code target.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Losing your place
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          The access check continues in another file. The reviewer needs a way back to the call.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Competing controls
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          File, display and review actions need clearer groups above the diff.
        </div>
      </div>
      <div style={{ borderTopColor: '#A33C17', borderTopStyle: 'solid', borderTopWidth: '2px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
          03{'  '}The choice
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1260px' }}>
          I kept layers and connected each summary point to its code. The reviewer can inspect the guard, then return to the same place.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '30px', width: '1260px' }}>
          I also explored behavior, counterexamples, impact and author handoff. Those directions need more context than this screen provides.
        </div>
      </div>
    </div>
  )