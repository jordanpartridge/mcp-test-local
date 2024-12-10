async function testListIssues() {
  const args = ListIssuesOptionsSchema.parse({
    owner: 'jordanpartridge',
    repo: 'mcp-test-local',
    state: 'open'
  });
  const { owner, repo, ...options } = args;
  const issues = await listIssues(owner, repo, options);
  return {
    content: [{ type: 'text', text: JSON.stringify(issues, null, 2) }]
  };
}
