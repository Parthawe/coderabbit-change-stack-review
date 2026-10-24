(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '40px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1600px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          02 / DECISION 1 · READ & INSPECT
        </div>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '16px', width: '100%' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
            <rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 8h8M8 12h8M8 16h5" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ boxSizing: 'border-box', color: '#000000', flex: 1, flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '56px', maxWidth: '1320px', minWidth: '0px' }}>
            Let me read before I choose where to go.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          Problems 1–2 · Reading a summary and jumping to code need separate actions.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '80px', width: '1440px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '18px', width: '440px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            ORIGINAL BEHAVIOR · Simplified
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            Expand and jump together
          </div>
          <div style={{ borderColor: '#D5D2D8', borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', padding: '20px' }}>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
              ⌄ Resolve workspace tenant<br />L49–130 · Medium complexity<br /><br />Requires workspace access, loads feedback directories and normalizes directory IDs.<br /><br />Expand → code jumps to L49
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            I reach the range quickly, but lose my place when I only want to read.
          </div>
        </div>
        <div style={{ borderRadius: '6px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '20px', width: '920px' }}>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '26px' }}>
            WHAT I CHOSE
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            Expand here. Follow a line link when ready.
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}>
              ⌄ Resolve workspace tenant
            </div>
            <div style={{ backgroundColor: '#FAF8FB', borderColor: '#E3E0E7', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', width: '100%' }}>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', fontSizeAdjust: 'none', gap: '8px' }}>
                <div style={{ boxSizing: 'border-box', color: '#65616A', display: 'inline-block', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
                  Lines 49–130
                </div>
                <div style={{ backgroundColor: '#FFF0DE', borderRadius: '3px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '1px', paddingInline: '6px' }}>
                  <div style={{ boxSizing: 'border-box', color: '#87420E', display: 'inline-block', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' }}>
                    Medium complexity
                  </div>
                </div>
              </div>
              <div style={{ boxSizing: 'border-box', color: '#211F24', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', fontSizeAdjust: 'none', lineHeight: '25px' }}>
                Adds resolveWorkspaceFeedbackTenant, which:
              </div>
              <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '8px', paddingBlock: '6px', paddingInline: '4px' }}>
                  <div style={{ boxSizing: 'border-box', color: '#252329', flexBasis: '0%', flexGrow: '1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', minWidth: '0px' }}>
                    requires workspace access via requireUnifyFeedback​WorkspaceAccess,
                  </div>
                  <div style={{ boxSizing: 'border-box', color: '#5B3526', display: 'flex', flexShrink: '0', flexWrap: 'wrap', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', justifyContent: 'end', lineHeight: '25px', textAlign: 'right', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font', width: '64px' }}>
                    L57–65
                  </div>
                </div>
                <div style={{ alignItems: 'start', boxSizing: 'border-box', columnGap: '8px', display: 'flex', flexWrap: 'wrap', height: 'fit-content', minHeight: '32px', paddingBlock: '6px', paddingInline: '4px' }}>
                  <div style={{ boxSizing: 'border-box', color: '#211F24', flexBasis: '0px', flexGrow: '1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', minWidth: '0px', overflowWrap: 'anywhere' }}>
                    loads feedback directories for the workspace,
                  </div>
                  <div style={{ boxSizing: 'border-box', color: '#582D1D', display: 'flex', flexBasis: '64px', flexShrink: '0', flexWrap: 'wrap', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', justifyContent: 'end', lineHeight: '25px', textAlign: 'right', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font', width: '64px' }}>
                    L70
                  </div>
                </div>
              </div>
              <div style={{ alignItems: 'start', backgroundColor: '#ECEBED', borderRadius: '3px', boxSizing: 'border-box', columnGap: '8px', display: 'flex', flexWrap: 'wrap', height: 'fit-content', minHeight: '32px', paddingBlock: '6px', paddingInline: '4px' }}>
                <div style={{ boxSizing: 'border-box', color: '#211F24', flexBasis: '0px', flexGrow: '1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px', minWidth: '0px', overflowWrap: 'anywhere' }}>
                  trims directory IDs to normalize Hub tenant_id matching,
                </div>
                <div style={{ boxSizing: 'border-box', color: '#582D1D', display: 'flex', flexBasis: '64px', flexShrink: '0', flexWrap: 'wrap', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', justifyContent: 'end', lineHeight: '25px', textAlign: 'right', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font', width: '64px' }}>
                  L75
                </div>
              </div>
              <div style={{ boxSizing: 'border-box', color: '#582D1D', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', fontSizeAdjust: 'none', lineHeight: '25px' }}>
                Whole function · L49–130
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            I gave each point its own line link. These sketches use the first three points; all six points and the whole function remain available.
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'center', borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '40px', paddingTop: '28px', width: '1440px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '320px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            I ALSO CONSIDERED
          </div>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            Put the explanation in a drawer
          </div>
        </div>
        <div style={{ borderColor: '#D5D2D8', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '16px', padding: '20px', width: '440px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
            access.ts   [Explanation →]
          </div>
          <div style={{ backgroundColor: '#FDFDFE', borderLeftColor: '#D5D2D8', borderLeftStyle: 'solid', borderLeftWidth: '2px', boxSizing: 'border-box', padding: '16px' }}>
            <div style={{ boxSizing: 'border-box', color: '#582D1D', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
              Resolve workspace tenant<br />L49–130 · Medium complexity<br />Requires workspace access, loads feedback directories and normalizes directory IDs.<br />Jump to L57–65 · L70 · L75
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '600px' }}>
          A drawer gives code more room, but adds an opening step every time I need the explanation.
        </div>
      </div>
      <div style={{ borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '24px', width: '200px' }}>
          The tradeoff
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          A precise link could make me miss surrounding logic. I kept the whole function one click away.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
        These are design explorations using this PR, not tested results.
      </div>
    </div>
  )
