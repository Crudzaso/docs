# Diagrams and Schematics

## System Flowchart

Below is a basic flowchart describing how users interact with the raffle system:

```mermaid
graph TD
    A[start] --> B[Log in or Sign up]
    B --> C[Select available raffle]
    C --> D[View raffle details]
    D --> E[Purchase ticket]
    E --> F[Process payment through gateway]
    F --> G{Is payment confirmed?}
    G -- Yes --> H[Register as participant]
    G -- No --> I[Show error and retry]
    H --> J[Wait for the draw]
    J --> K[Announce winner]
    K --> L[Notify the winner via email]
    K --> M[Display results on the platform]


