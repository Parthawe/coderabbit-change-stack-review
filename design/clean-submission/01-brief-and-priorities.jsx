(
    <div style={{ backgroundColor: '#FAF8FB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '32px', height: 'fit-content', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', padding: '64px', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', width: '1100px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '54px' }}>
          Checking a summary against the code.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
          Parth Pawar · UI + interaction design · Formbricks PR #8650
        </div>
      </div>
      <div style={{ borderBottomColor: '#E3E0E7', borderBottomStyle: 'solid', borderBottomWidth: '1px', borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '56px', paddingBlock: '28px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '540px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}>
            The assignment
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
            Make Change Stack easier to interact with, without losing its capability. Diagnose 3–5 problems, redesign one main screen, and explain the choices. Expected effort: 1–2 hours.
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '640px' }}>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}>
            The reviewer’s task
          </div>
          <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px' }}>
            Check what the workspace-access summary says, follow the guard into another file, and return to the call without losing your place.
          </div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '28px', fontWeight: 600, lineHeight: '36px' }}>
          What I prioritized
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '1120px' }}>
          I worked from the assigned Formbricks review and followed a summary into the code. I compared four ways to start a review, then chose M to improve that route using the PR’s existing content. Layers, J/K, summary jumps, Z Focus and explicit viewed status already exist in CodeRabbit; I kept them.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          1
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Find the right lines
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          Six summary points share L49–130. I gave each point a smaller target, while keeping the full wording and surrounding code available.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          2
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Keep a way back
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          The access check continues in feedback-access.ts. I added a guard link and Return so this route restores the caller’s selection and reading position.
        </div>
      </div>
      <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', lineHeight: '30px', width: '32px' }}>
          3
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', width: '290px' }}>
          Separate the jobs
        </div>
        <div style={{ boxSizing: 'border-box', color: '#000000', flexShrink: '0', fontFamily: 'system-ui, sans-serif', fontSize: '19px', lineHeight: '29px', width: '870px' }}>
          File, display and review controls compete above the diff. I grouped them by what they affect, kept the PR details visible and moved less-used tools into named menus.
        </div>
      </div>
      <div style={{ borderTopColor: '#E3E0E7', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px' }}>
          Read in order: source comparison → directions considered → final M → interactions → decisions and scope.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#65616A', fontFamily: 'system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
          Paper contains the editable design and reasoning. The browser prototype demonstrates the interactions. This work expanded beyond the assignment’s original 1–2 hour timebox.
        </div>
        <div style={{ boxSizing: 'border-box', color: '#A33C17', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '18px', lineHeight: '28px', textDecoration: 'underline 1px', textUnderlinePosition: 'from-font' }}>
          Try the access-check prototype
        </div>
      </div>
    </div>
  )