(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '40px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '72px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1600px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          04 / Tradeoffs & next steps
        </div>
        <div style={{ boxSizing: 'border-box', color: '#211F24', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '44px', fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '52px' }}>
          Where I’d take this next.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#211F24', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', maxWidth: '1180px' }}>
          I’d watch someone review this PR before calling the design better. These are the choices I’d be most willing to change.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ borderBottomColor: '#D5D2D8', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '64px', paddingBottom: '16px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px', width: '420px' }}>
            THE TRADEOFF
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', flexBasis: '0%', flexGrow: '1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            WHAT I NEED TO UNDERSTAND · WHAT I’D CHANGE
          </div>
        </div>
        <div style={{ borderBottomColor: '#D5D2D8', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '64px', paddingBlock: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '420px' }}>
            <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '14px' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
                <rect x="3" y="4" width="24" height="22" rx="1" fill="none" stroke="#65616A" strokeWidth="1.6" />
                <path d="M11 4v22M21 4v22" fill="none" stroke="#65616A" strokeWidth="1.6" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '31px' }}>
                More context takes space.
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              Full summaries and nested files leave less room for the diff.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 500, lineHeight: '31px' }}>
              Do reviewers keep that context open, or close it to read the code?
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              If it gets in the way, I’d try adjustable panel widths and remember which sections they collapse.
            </div>
          </div>
        </div>
        <div style={{ borderBottomColor: '#D5D2D8', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '64px', paddingBlock: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '420px' }}>
            <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '14px' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
                <path d="M3 7h18M3 15h24M3 23h18" fill="none" stroke="#65616A" strokeWidth="1.6" />
                <rect x="9" y="11" width="13" height="8" rx="1" fill="none" stroke="#65616A" strokeWidth="1.6" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '31px' }}>
                A precise link can narrow attention.
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              One highlighted statement could make the surrounding branch easier to miss.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 500, lineHeight: '31px' }}>
              Can they explain the whole access check and spot a branch the summary doesn’t cover?
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              If they miss it, I’d link to the relevant branch and show more surrounding code.
            </div>
          </div>
        </div>
        <div style={{ borderBottomColor: '#D5D2D8', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '64px', paddingBlock: '24px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '420px' }}>
            <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '14px' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
                <path d="M4 4h22v17H12l-7 5V21H4z" fill="none" stroke="#65616A" strokeWidth="1.6" />
                <path d="M9 10h12M9 15h8" fill="none" stroke="#65616A" strokeWidth="1.6" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '31px' }}>
                Status first may not always help.
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              This PR gives me one captured resolved finding. That is a narrow example.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 500, lineHeight: '31px' }}>
              With open and resolved findings together, can they find what still needs action?
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              If urgent findings get buried, I’d revisit the grouping and try severity-first sorting.
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#211F24', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
          With more time, I’d work in this order.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '48px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '10px', minWidth: '0px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
              <div style={{ boxSizing: 'border-box', color: '#C65D21', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '20px' }}>
                1
              </div>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
                Watch a real review
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              Use the same task in both versions, varying which comes first. Note wrong turns, missed context and hesitation.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '10px', minWidth: '0px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
              <div style={{ boxSizing: 'border-box', color: '#C65D21', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '20px' }}>
                2
              </div>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
                Try a more complex PR
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              Follow dependencies across layers and resume after an interruption. Check whether Return and progress still help.
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', gap: '10px', minWidth: '0px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
              <div style={{ boxSizing: 'border-box', color: '#C65D21', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '20px' }}>
                3
              </div>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
                Fix what gets in the way
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
              Use what I learn to revise the design. Then clarify Overview’s multi-select filter states.
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#211F24', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '28px', width: '180px' }}>
          With the team
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', flexBasis: '0%', flexGrow: '1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '29px' }}>
          I’d also check how summaries stay linked after a new commit, and when file-viewed progress should reset.
        </div>
      </div>
    </div>
  )
