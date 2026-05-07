#!/usr/bin/env pwsh
# .claude/hooks/block-dangerous.ps1

# Read all stdin
$inputText = [Console]::In.ReadToEnd()

# Try to parse JSON (equivalent to jq)
try {
    $json = $inputText | ConvertFrom-Json
    $command = $json.tool_input.command
}
catch {
    # If input is not valid JSON, exit silently like the bash script
    exit 0
}

# If command is null or empty, do nothing
if ([string]::IsNullOrWhiteSpace($command)) {
    exit 0
}

# Dangerous command patterns (regex equivalent of grep -E)
$dangerousPattern = 'rm\s+-rf|git\s+push\s+--force|DROP\s+TABLE'

if ($command -match $dangerousPattern) {
    $response = @{
        permissionDecision       = "deny"
        permissionDecisionReason = "Zablokowano niebezpieczną komendę. Użyj bezpieczniejszej alternatywy."
    }

    # Output JSON (like echo '{...}')
    $response | ConvertTo-Json -Compress
    exit 0
}

exit 0