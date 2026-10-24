(
    <div style={{ backgroundColor: '#FFFFFF', borderColor: '#DEDCE1', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', padding: '32px', WebkitFontSmoothing: 'antialiased', width: '900px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '18px' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#C65D21', borderRadius: '21px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '42px', justifyContent: 'center', width: '42px' }}>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'flex', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '28px' }}>
            6
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '30px', fontWeight: 600, lineHeight: '38px' }}>
          Include the return trip
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '32px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', width: '402px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
            BEFORE · ORIGINAL
          </div>
          <div style={{ alignSelf: 'center', backgroundColor: '#FAF8FB', borderColor: '#E3E0E7', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '35px', overflow: 'clip', position: 'relative', width: '402px' }}>
            <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M5MWMDHE2E77VV689SCNHGV7/1KV1MNDBZ4JMH0Q421DVKZRKDT.png)', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', boxSizing: 'border-box', height: '877.091px', left: '-657.818px', position: 'absolute', top: '-282.618px', width: '1559.27px' }} />
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '27px' }}>
            The guard call is in access.ts. I had to remember the route back.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', width: '402px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
            AFTER · INTERACTION DETAIL
          </div>
          <div style={{ backgroundColor: '#FAF8FB', borderColor: '#E3E0E7', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px' }}>
            <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '30px' }}>
              Inspect guard →
            </div>
            <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '28px' }}>
              feedback-access.ts · L27, L38
            </div>
            <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '28px' }}>
              Return → access.ts
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
              Same selection and scroll position
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          Inspect guard opens the dependency. Return restores the caller and its position.
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '16px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            EXPECTED IMPACT
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
            Follow the check without having to reconstruct where I left off.
          </div>
        </div>
      </div>
    </div>
  )
