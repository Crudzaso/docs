# Estimation & Tracking

## Estimation Technique
We use a modified version of the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, 34, 55, 89) to estimate the effort required for each work item. This scale helps us differentiate between small, medium, and large tasks.

## Effort Tracking
Each work item in Azure DevOps has an "Estimated Effort" field, which is used to track the expected time required to complete the task. As team members work on the tasks, they update the "Remaining Effort" field to reflect the time left to finish the work.

## Velocity Calculation
At the end of each Sprint, we calculate the team's velocity by summing the "Completed Effort" of all the work items that were marked as "Done" during that Sprint. This metric helps us plan future Sprints and ensure that the team is maintaining a consistent pace.

## Burndown Charts
We use the Azure DevOps Burndown Charts to visualize the remaining work over time. These charts help us identify potential issues, such as tasks taking longer than expected or the team falling behind on their commitments.