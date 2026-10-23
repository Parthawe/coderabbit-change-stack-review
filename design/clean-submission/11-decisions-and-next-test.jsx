(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '24px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '48px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}>
          Why I chose this iteration
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '21px', lineHeight: '31px', width: '1180px' }}>
          This is the final iteration, with a working prototype and one-page rationale. The four explorations support the choice. I built the summary-to-code route; whether it helps developers review better is still untested.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '36px', paddingBlock: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '350px' }}>
          Did you spot the right problems?
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '930px' }}>
          In this PR, six summary points share L49–130, and the access check continues in another file. That gave me a specific task to work on. I haven’t tested how often this gets in a developer’s way.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '36px', paddingBlock: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '350px' }}>
          Is the visual and micro-interaction polish better?
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '930px' }}>
          I grouped file actions beside the file and display controls above the code. I kept the icons and numbers. After following a guard, Return brings me back to the same selection and reading position; Undo lets me reverse a viewed mark.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '36px', paddingBlock: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '350px' }}>
          Is the same information easier to scan?
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '930px' }}>
          Six short labels expose the individual points; the full wording is one click away. I expect this to help reviewers find a point, but it takes space. Both captures use the same code, mode and viewport. The original fits more code; faster scanning is still a hypothesis.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '36px', paddingBlock: '20px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '30px', width: '350px' }}>
          Can you explain why?
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '930px' }}>
          I chose one code pane because showing the caller and guard together squeezed both at laptop width. Return keeps a way back. I also kept the surrounding code readable because a small highlight could make someone stop looking too soon.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '36px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '32px', width: '350px' }}>
          What I would check with developers
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', width: '930px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            I’d ask developers to explain the access check on both screens, then find something the summary might miss. I’d vary which screen they try first and watch where they lose their place or miss a branch.
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px' }}>
            If the links lead people to overlook code, I’d show a wider range or make the highlight less prominent. If the file list gets little use, I’d give that space back to the diff.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
        Scope: seven of 52 diffs, one manual guard route, commit 23cdac2. Capability destinations are mapped; full functionality is not implemented. No developer study. The PR is merged; Submit is disabled. Modified-file review and semantic diffs are outside this sample.
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '28px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font' }}>
          Try the review
        </div>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font' }}>
          Read the one-page rationale
        </div>
      </div>
    </div>
  )