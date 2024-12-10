      case "list_issues": {
        const args = ListIssuesOptionsSchema.parse(request.params.arguments);
        const { owner, repo, ...options } = args;
        const issues = await listIssues(owner, repo, options);
        return {
          content: [{ type: "text", text: JSON.stringify(issues, null, 2) }]
        };
      }