(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '24px', height: 'fit-content', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '48px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}>
          I tried four ways into the review.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '21px', lineHeight: '31px', width: '1190px' }}>
          I compared each direction against three needs: get to code quickly, keep the layer model, and work with the information available in this PR.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingTop: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '40px' }}>
          01
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '470px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
            Start with behavior
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
            Understand the intended change → check the code
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '760px' }}>
          This puts the intended change first. I liked that focus, but I’d need reliable intent before using it to guide a review.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingTop: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '40px' }}>
          02
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '470px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
            Start with counterexamples
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
            Choose a case that could fail → inspect the guard
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '760px' }}>
          This challenges the summary directly. The cases need to come from real evidence; invented scenarios could send the reviewer in the wrong direction.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingTop: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '40px' }}>
          03
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '470px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
            Start with impact
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
            See affected areas → follow their dependencies
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '760px' }}>
          A dependency map could help me choose where to look. I’d need to trust those relationships before making the map the starting point.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingTop: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '40px' }}>
          04
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '8px', width: '470px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px' }}>
            Start with the author’s handoff
          </div>
          <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
            Read the author’s notes → check the open questions
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '760px' }}>
          Author notes could explain decisions the diff cannot. But someone has to prepare that handoff before the review can benefit from it.
        </div>
      </div>
      <div style={{ borderTopColor: '#A33C17', borderTopStyle: 'solid', borderTopWidth: '2px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '28px', fontWeight: 600, lineHeight: '36px' }}>
          I chose M to work within the existing review.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '21px', lineHeight: '31px', width: '1210px' }}>
          M lets the reviewer start with the existing summary and inspect the code immediately. I could keep layers and use this PR’s content without requiring new author input or a reliable dependency map. I built the summary-to-code route.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '26px' }}>
          These were design explorations. I haven’t run an A/B test with developers. M is my choice for this brief; the next test could change it.
        </div>
      </div>
    </div>
  )
