(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '64px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', width: '1312px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '52px' }}>
          Keep your place while reviewing.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          Parth Pawar · Formbricks #8650 · 52 files across 7 layers
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1312px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
            01{'  '}The task
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '38px', width: '1250px' }}>
            Make Change Stack easier to use without losing its capabilities. I focused on checking a summary, following the access guard and returning to the call.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}>
        02 What I noticed
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '250px' }}>
          Find the right lines
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          Six summary points share L49–130. Reaching the function still leaves the reviewer to locate each point.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '250px' }}>
          Keep a way back
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          The access check continues in another file. Checking it means leaving the caller and finding your place again.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '250px' }}>
          Separate the jobs
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          File, display and review controls compete above the diff. Their grouping can make the next action clearer.
        </div>
      </div>
      <div style={{ borderTopColor: '#A33C17', borderTopStyle: 'solid', borderTopWidth: '2px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
          03{'  '}Why I chose this direction
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1260px' }}>
          I explored starting with behavior, counterexamples, impact or an author handoff. Each needs more reliable context. I chose to connect the summaries and code already available, while keeping layers and the full summary.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
          Design exploration; no A/B test.
        </div>
      </div>
    </div>
  )