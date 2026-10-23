(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', width: '1280px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '52px' }}>
          Follow the change. Keep your place.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          CodeRabbit Change Stack · Formbricks #8650 · 52 files, 7 layers · Parth Pawar
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1280px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
            01{'  '}The review task
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '38px', width: '1260px' }}>
            Check what a layer does, follow the related code, and return without losing your place.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
        02{'  '}What I noticed and changed
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Too much to search
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          Six summary points share L49–130. I gave each a smaller target so there’s less code to search before checking the explanation.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Losing your place
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          The access check continues in another file. Inspect guard and Return keep the route back, so there’s less to retrace.
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '32px', width: '280px' }}>
          Reading causes a jump
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '970px' }}>
          Expanding a summary also jumps the code. I separated reading from code links so I can understand the explanation without losing my place.
        </div>
      </div>
      <div style={{ borderTopColor: '#A33C17', borderTopStyle: 'solid', borderTopWidth: '2px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
          03{'  '}Why this direction
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '34px', width: '1260px' }}>
          I kept CodeRabbit’s layers, summary jumps and Focus. These changes support its guided review: understand the explanation, check the code, then follow the dependency.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '30px', width: '1260px' }}>
          I expect less searching and backtracking. That still needs testing with developers; a smaller highlight could also make surrounding code easier to miss.
        </div>
      </div>
    </div>
  )
