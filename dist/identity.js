// Copy the verified public branch; preserve the user's ability to copy manually if blocked.
const branchCopy = document.getElementById('copy-branch');
branchCopy.addEventListener('click', async () => {
  const branch = document.querySelector('.branch-name').textContent;
  try {
    await navigator.clipboard.writeText(branch);
    branchCopy.title = 'Branch copied';
    branchCopy.setAttribute('aria-label', 'Branch copied');
    document.getElementById('interaction-status').textContent = 'Branch name copied';
    window.setTimeout(() => { branchCopy.title = 'Copy branch name'; branchCopy.setAttribute('aria-label', 'Copy branch name'); }, 1800);
  } catch {
    const range = document.createRange(); range.selectNodeContents(document.querySelector('.branch-name'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.getElementById('interaction-status').textContent = 'Clipboard unavailable. Branch name selected; copy it manually.';
  }
});
