(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '32px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '48px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          01 / Where I noticed the problems · Observation 4
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '40px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '48px' }}>
          Following a check needs a way back
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', flexShrink: '0', height: '295px', position: 'relative', width: '1075px' }}>
        <div style={{ boxSizing: 'border-box', height: '255px', left: '32px', overflow: 'clip', position: 'absolute', top: '20px', width: '1011px' }}>
          <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M5MWMDHE2E77VV689SCNHGV7/1KV1MNDBZ4JMH0Q421DVKZRKDT.png)', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', boxSizing: 'border-box', height: '1080px', left: '-396px', position: 'absolute', top: '-262.5px', width: '1920px' }} />
        </div>
        <svg width="1075" height="295" viewBox="0 0 1075 295" xmlns="http://www.w3.org/2000/svg" style={{ left: '0px', top: '0px', display: 'inline-block', position: 'absolute' }}>
          <circle cx="765" cy="166" r="15" fill="#C65D21" />
          <text x="765" y="172" textAnchor="middle" fontFamily="Geist" fontSize="17" fontWeight="600" fill="#FFFFFF">
            4
          </text>
          <path d="M748 166 L738 132" fill="none" stroke="#C65D21" strokeWidth="2" />
          <circle cx="738" cy="132" r="3" fill="#C65D21" />
        </svg>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '24px', width: '1180px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '38px' }}>
          This call uses a guard defined in another file. After inspecting that guard, I need to get back to this call and my reading position.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '34px' }}>
          Inspect guard and Return make that round trip explicit.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
          Original diff · access.ts · Call at L57; the dependency is in another file
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
        Authentic source crop · Formbricks #8650 · Light · 2× capture. Annotations sit over the unchanged interface. Expected effects need testing with developers.
      </div>
    </div>
  )