# Change Stack practice PR

A standalone permission-check example for trying CodeRabbit on our own PR.
This is a toy scenario, not Formbricks code or a production security service.
The published design prototype does not import these files.

Follow `readFeedbackRecord` into `requireWorkspaceAccess`, then return to the
record's tenant check. The policy requires a signed-in member with
`feedback:read`, an enabled workspace feature and a record belonging to a
workspace tenant. Missing and cross-tenant records return the same denial.

Run the checks from the repository root with Node.js 22 or later:

```sh
node --test examples/change-stack-demo/records.test.mjs
```

The actor, workspace configuration and lookup function represent trusted server
inputs. Authentication, input parsing, storage and HTTP responses are outside
this example. Do not use client-provided memberships to authorize real requests.
