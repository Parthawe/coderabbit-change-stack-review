(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '36px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBlock: '64px', paddingInline: '80px', WebkitFontSmoothing: 'antialiased', width: '1600px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '26px' }}>
          02 / DECISION 4 · COMMENTS & FINDINGS
        </div>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '16px', width: '100%' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0', display: 'inline-block' }}>
            <path d="M3 4h18v13H9l-6 4zM7 8h10M7 12h6" fill="none" stroke="#65616A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ boxSizing: 'border-box', color: '#000000', flex: 1, flexBasis: '0%', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '56px', maxWidth: '1320px', minWidth: '0px' }}>
            Read the status before the severity.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px' }}>
          Problem 7 · Same resolved finding in access.ts, with two uncaptured replies.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '40px', width: '1440px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '20px', paddingBlock: '24px', width: '360px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            OPTION A
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            A flat message list
          </div>
          <div style={{ borderColor: '#D5D2D8', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              3 source messages · 1 captured thread
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '28px' }}>
              Dataset lookup uses an untrimmed directory ID
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              coderabbitai · Major · Resolved · L75–90
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              The explicit dataset lookup used the raw directory ID while returned IDs were trimmed.
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              2 replies · bodies not captured
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            The content is available, but I have to read the metadata to establish its status.
          </div>
        </div>
        <div style={{ backgroundColor: '#FFFFFF', borderColor: '#C8C4CC', borderRadius: '6px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '24px', padding: '32px', width: '640px' }}>
          <div style={{ boxSizing: 'border-box', color: '#17151A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '26px' }}>
            CHOSEN · OPTION B
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            Resolved history, then severity
          </div>
          <div style={{ borderColor: '#D5D2D8', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
              3 source messages · 1 captured thread
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '26px' }}>
              Resolved history
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
              All 3 messages are resolved. This is a merged PR.
            </div>
            <div style={{ borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '16px' }}>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '26px' }}>
                ▸ Dataset lookup uses an untrimmed directory ID
              </div>
              <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
                Resolved · Major · L75–90
              </div>
              <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
                coderabbitai · 2 replies not reproduced
              </div>
            </div>
            <div style={{ borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', paddingTop: '14px' }}>
              <div style={{ boxSizing: 'border-box', color: '#582D1D', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
                Add file note · saved in this tab only
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            The finding stays available as history. Its severity does not imply that it still needs action.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '20px', paddingBlock: '24px', width: '360px' }}>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
            OPTION C
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '26px', fontWeight: 600, lineHeight: '34px' }}>
            Group by severity first
          </div>
          <div style={{ borderColor: '#D5D2D8', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              3 source messages · 1 captured thread
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '28px' }}>
              Major · 1 captured finding
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              Dataset lookup uses an untrimmed directory ID
            </div>
            <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              Resolved · L75–90
            </div>
            <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '28px' }}>
              coderabbitai · 2 replies not reproduced
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            Useful when triaging open findings, but the severity heading gives this resolved item too much weight.
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'start', borderTopColor: '#D5D2D8', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '28px', width: '200px' }}>
          Why I chose B
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexGrow: '1', fontFamily: 'system-ui, sans-serif', fontSize: '22px', lineHeight: '32px', width: '1208px' }}>
          I need to know whether a finding is still open before deciding how urgently to inspect it. Status comes first; severity stays on the finding. Collapsing history adds a step, but avoids presenting resolved work as a new issue.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
        Current section explorations using the same captured finding and two unavailable replies. Counts are for access.ts. The finding body is paraphrased in the prototype. Local notes stay separate from source comments.
      </div>
    </div>
  )