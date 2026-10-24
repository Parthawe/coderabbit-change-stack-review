(
    <div style={{ backgroundColor: '#FFFFFF', borderColor: '#DEDCE1', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', MozOsxFontSmoothing: 'grayscale', overflowWrap: 'anywhere', padding: '32px', WebkitFontSmoothing: 'antialiased', width: '1000px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '18px' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#C65D21', borderRadius: '21px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '42px', justifyContent: 'center', width: '42px' }}>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'flex', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '28px' }}>
            7
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '30px', fontWeight: 600, lineHeight: '38px' }}>
          Make the comment scope clear
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '32px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', width: '452px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
            BEFORE · ORIGINAL
          </div>
          <div style={{ alignSelf: 'center', backgroundColor: '#FAF8FB', borderColor: '#E3E0E7', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '81.925px', overflow: 'clip', position: 'relative', width: '452px' }}>
            <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M5MWMDHE2E77VV689SCNHGV7/6T2ZJ2KBGV72PH43SW47K77415.png)', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', boxSizing: 'border-box', height: '1017px', left: '-1340.46px', position: 'absolute', top: '-139.838px', width: '1808px' }} />
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
            Entire layer · 15 source messages
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', width: '452px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
            AFTER · COMMENT DETAIL
          </div>
          <div style={{ backgroundColor: '#FAF8FB', borderColor: '#E3E0E7', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div style={{ borderRadius: '4px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '4px', width: '100%' }}>
              <div style={{ backgroundColor: '#ECEBED', borderRadius: '3px', boxSizing: 'border-box', paddingBlock: '4px', paddingInline: '10px' }}>
                <div style={{ boxSizing: 'border-box', color: '#582D1D', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '13px', lineHeight: '20px' }}>
                  This file
                </div>
              </div>
              <div style={{ boxSizing: 'border-box', paddingBlock: '4px', paddingInline: '10px' }}>
                <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '13px', lineHeight: '20px' }}>
                  Entire layer
                </div>
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '26px', lineHeight: '34px' }}>
              access.ts · Comments 3
            </div>
            <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '28px' }}>
              3 source messages · 1 captured thread
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
              2 reply bodies not reproduced
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
          15 is the layer total; 3 is for access.ts. Capture coverage is a prototype limit.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          I made This file and Entire layer explicit above the summaries and comments.
        </div>
        <div style={{ borderTopColor: '#DEDCE1', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '16px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            EXPECTED IMPACT
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
            Know which changes a count or discussion belongs to before opening it.
          </div>
        </div>
      </div>
    </div>
  )
