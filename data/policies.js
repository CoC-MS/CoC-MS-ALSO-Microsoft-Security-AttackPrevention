// Generated and normalized by scripts/sync-policies.mjs. Do not edit by hand.
// Source: CoC-MS/ALSO-Microsoft-Security-Conditional-Access at 71688eed941d2d1f7ebe75709018b5954cfd1b6d.
// Copyright 2026 vladjoh; portions Copyright (c) 2025 j0eyv.
// Source licenses and attribution are retained in SOURCE_LICENSE.txt.
export default {
  "repository": "CoC-MS/ALSO-Microsoft-Security-Conditional-Access",
  "revision": "71688eed941d2d1f7ebe75709018b5954cfd1b6d",
  "fetchedAt": "2026-10-23T09:33:43.895Z",
  "policies": [
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA000",
      "package": "BP",
      "name": "BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "674bf47b-2f56-435b-a27a-0e3ae75625e4",
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d30708bf-34f0-45e8-b452-b871daf15be4"
          ],
          "includeRoles": [],
          "excludeRoles": [
            "d29b2b05-8046-44ba-8758-1e26182fcf32"
          ],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "code": "BP-ALSO-CA001",
      "package": "BP",
      "name": "BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "96bf7246-bf27-4ff0-9efb-9f4833d85682",
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "1eabdd99-1dab-48c5-8992-2988de9f441b"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "code": "BP-ALSO-CA002",
      "package": "BP",
      "name": "BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "exchangeActiveSync",
          "other"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f6faa1ed-6de1-4426-aa00-5ce8a00a6db6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA003",
      "package": "BP",
      "name": "BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [],
          "excludeApplications": [],
          "includeUserActions": [
            "urn:user:registerdevice"
          ],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "1db7af05-320a-45d3-964f-165b87ab997f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "code": "BP-ALSO-CA004",
      "package": "BP",
      "name": "BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "905a8ab8-213d-4e24-8852-47bbb1eb3902"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "authenticationFlows": {
          "transferMethods": "deviceCodeFlow,authenticationTransfer"
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "code": "BP-ALSO-CA005",
      "package": "BP",
      "name": "BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "Office365"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "af42ab8f-4f12-4fc0-95e4-d8ea2f3c4c7f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantApplication"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "code": "BP-ALSO-CA006",
      "package": "BP",
      "name": "BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "00000003-0000-0ff1-ce00-000000000000",
            "00000002-0000-0ff1-ce00-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "cf55f879-ef6c-49fb-a9f6-5ec30816108c"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "applicationEnforcedRestrictions": {
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA100",
      "package": "BP",
      "name": "BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000002",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Multifactor authentication",
          "description": "Combinations of methods that satisfy strong authentication, such as a password + SMS",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor",
            "deviceBasedPush",
            "temporaryAccessPassOneTime",
            "temporaryAccessPassMultiUse",
            "password,microsoftAuthenticatorPush",
            "password,softwareOath",
            "password,hardwareOath",
            "password,sms",
            "password,voice",
            "federatedMultiFactor",
            "microsoftAuthenticatorPush,federatedSingleFactor",
            "softwareOath,federatedSingleFactor",
            "hardwareOath,federatedSingleFactor",
            "sms,federatedSingleFactor",
            "voice,federatedSingleFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA101",
      "package": "BP",
      "name": "BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "code": "BP-ALSO-CA102",
      "package": "BP",
      "name": "BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "6f7cd606-1b7d-4474-9570-175fccbbb4d1"
          ],
          "includeRoles": [
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 4,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA103",
      "package": "BP",
      "name": "BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7fa2d23c-701e-4870-b2c5-a0057006317b"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "code": "BP-ALSO-CA104",
      "package": "BP",
      "name": "BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "0e20bd8b-8cbd-414a-9015-7cb4d65cb1c7"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "code": "BP-ALSO-CA105",
      "package": "BP",
      "name": "BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "14d82eec-204b-4c2f-b7e8-296a70dab67e"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a8615919-e9cd-4169-9f0c-ec5e54f382dd"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000004",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Phishing-resistant MFA",
          "description": "Phishing-resistant, Passwordless methods for the strongest authentication, such as a FIDO2 security key",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA107",
      "package": "BP",
      "name": "BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "633c497f-4a0b-4ff6-96e5-b7202095f714"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA108",
      "package": "BP",
      "name": "BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b2ae804e-d603-4f46-a199-5b0f82afef91"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA109",
      "package": "BP",
      "name": "BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d0c1599c-1e9f-46da-96f0-29ef8457054d"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA110",
      "package": "BP",
      "name": "BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "04111cd6-fe21-48be-bf31-eab50efa4d98"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA200",
      "package": "BP",
      "name": "BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "code": "BP-ALSO-CA202",
      "package": "BP",
      "name": "BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a17ab193-9ce3-4d1b-b8c1-081133da29af"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows",
            "macOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA203",
      "package": "BP",
      "name": "BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": null,
          "type": null,
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "everyTime",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA204",
      "package": "BP",
      "name": "BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "3fc74b7e-87fb-4bca-ac4a-4c61c6d06c31"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA205",
      "package": "BP",
      "name": "BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "8baec328-5076-4e0c-bc13-6b9881998c21"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "code": "BP-ALSO-CA206",
      "package": "BP",
      "name": "BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7af9785c-8986-4f93-81b6-22d1e42fa9d6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA207",
      "package": "BP",
      "name": "BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "f53895d3-095d-408f-8e93-8f94b391404e"
          ],
          "excludeApplications": [
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "c49752b3-06c1-4b65-baa3-e94bba9b9956"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA208",
      "package": "BP",
      "name": "BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "43eccef5-259a-458f-a0a1-037f6fe0f05d"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "code": "BP-ALSO-CA209",
      "package": "BP",
      "name": "BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "e56cc655-ecfb-4e0e-a4db-5f343faf28a8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA211",
      "package": "BP",
      "name": "BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "code": "BP-ALSO-CA300",
      "package": "BP",
      "name": "BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "d30708bf-34f0-45e8-b452-b871daf15be4",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "code": "BP-ALSO-CA301",
      "package": "BP",
      "name": "BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "104a9da2-2ec0-42cd-a2ca-a80476fb1b91"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA400",
      "package": "BP",
      "name": "BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "code": "BP-ALSO-CA401",
      "package": "BP",
      "name": "BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "2793995e-0a7d-40d7-bd35-6968ba142197",
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4e58241c-417a-4466-b8a8-1393423cdd59"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "code": "BP-ALSO-CA402",
      "package": "BP",
      "name": "BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4cb01525-690b-430c-b57e-d596d3c934dd"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA403",
      "package": "BP",
      "name": "BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "ca95bd45-484c-408a-8e02-ca8bd5807807"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA404",
      "package": "BP",
      "name": "BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_BP/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a52017f5-feda-4995-a5c0-b7268df6959a"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA000",
      "package": "E5",
      "name": "BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "674bf47b-2f56-435b-a27a-0e3ae75625e4",
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d30708bf-34f0-45e8-b452-b871daf15be4"
          ],
          "includeRoles": [],
          "excludeRoles": [
            "d29b2b05-8046-44ba-8758-1e26182fcf32"
          ],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "code": "BP-ALSO-CA001",
      "package": "E5",
      "name": "BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "96bf7246-bf27-4ff0-9efb-9f4833d85682",
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "1eabdd99-1dab-48c5-8992-2988de9f441b"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "code": "BP-ALSO-CA002",
      "package": "E5",
      "name": "BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "exchangeActiveSync",
          "other"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f6faa1ed-6de1-4426-aa00-5ce8a00a6db6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA003",
      "package": "E5",
      "name": "BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [],
          "excludeApplications": [],
          "includeUserActions": [
            "urn:user:registerdevice"
          ],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "1db7af05-320a-45d3-964f-165b87ab997f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "code": "BP-ALSO-CA004",
      "package": "E5",
      "name": "BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "905a8ab8-213d-4e24-8852-47bbb1eb3902"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "authenticationFlows": {
          "transferMethods": "deviceCodeFlow,authenticationTransfer"
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "code": "BP-ALSO-CA005",
      "package": "E5",
      "name": "BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "Office365"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "af42ab8f-4f12-4fc0-95e4-d8ea2f3c4c7f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantApplication"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "code": "BP-ALSO-CA006",
      "package": "E5",
      "name": "BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "00000003-0000-0ff1-ce00-000000000000",
            "00000002-0000-0ff1-ce00-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "cf55f879-ef6c-49fb-a9f6-5ec30816108c"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "applicationEnforcedRestrictions": {
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA100",
      "package": "E5",
      "name": "BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000002",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Multifactor authentication",
          "description": "Combinations of methods that satisfy strong authentication, such as a password + SMS",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor",
            "deviceBasedPush",
            "temporaryAccessPassOneTime",
            "temporaryAccessPassMultiUse",
            "password,microsoftAuthenticatorPush",
            "password,softwareOath",
            "password,hardwareOath",
            "password,sms",
            "password,voice",
            "federatedMultiFactor",
            "microsoftAuthenticatorPush,federatedSingleFactor",
            "softwareOath,federatedSingleFactor",
            "hardwareOath,federatedSingleFactor",
            "sms,federatedSingleFactor",
            "voice,federatedSingleFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA101",
      "package": "E5",
      "name": "BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "code": "BP-ALSO-CA102",
      "package": "E5",
      "name": "BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "6f7cd606-1b7d-4474-9570-175fccbbb4d1"
          ],
          "includeRoles": [
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 4,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA103",
      "package": "E5",
      "name": "BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7fa2d23c-701e-4870-b2c5-a0057006317b"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "code": "BP-ALSO-CA104",
      "package": "E5",
      "name": "BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "0e20bd8b-8cbd-414a-9015-7cb4d65cb1c7"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "code": "BP-ALSO-CA105",
      "package": "E5",
      "name": "BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "14d82eec-204b-4c2f-b7e8-296a70dab67e"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a8615919-e9cd-4169-9f0c-ec5e54f382dd"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000004",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Phishing-resistant MFA",
          "description": "Phishing-resistant, Passwordless methods for the strongest authentication, such as a FIDO2 security key",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA107",
      "package": "E5",
      "name": "BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "633c497f-4a0b-4ff6-96e5-b7202095f714"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA108",
      "package": "E5",
      "name": "BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b2ae804e-d603-4f46-a199-5b0f82afef91"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA109",
      "package": "E5",
      "name": "BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d0c1599c-1e9f-46da-96f0-29ef8457054d"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA110",
      "package": "E5",
      "name": "BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "04111cd6-fe21-48be-bf31-eab50efa4d98"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA200",
      "package": "E5",
      "name": "BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "code": "BP-ALSO-CA202",
      "package": "E5",
      "name": "BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a17ab193-9ce3-4d1b-b8c1-081133da29af"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows",
            "macOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA203",
      "package": "E5",
      "name": "BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": null,
          "type": null,
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "everyTime",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA204",
      "package": "E5",
      "name": "BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "3fc74b7e-87fb-4bca-ac4a-4c61c6d06c31"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA205",
      "package": "E5",
      "name": "BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "8baec328-5076-4e0c-bc13-6b9881998c21"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "code": "BP-ALSO-CA206",
      "package": "E5",
      "name": "BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7af9785c-8986-4f93-81b6-22d1e42fa9d6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA207",
      "package": "E5",
      "name": "BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "f53895d3-095d-408f-8e93-8f94b391404e"
          ],
          "excludeApplications": [
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "c49752b3-06c1-4b65-baa3-e94bba9b9956"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA208",
      "package": "E5",
      "name": "BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "43eccef5-259a-458f-a0a1-037f6fe0f05d"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "code": "BP-ALSO-CA209",
      "package": "E5",
      "name": "BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "e56cc655-ecfb-4e0e-a4db-5f343faf28a8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA211",
      "package": "E5",
      "name": "BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "code": "BP-ALSO-CA300",
      "package": "E5",
      "name": "BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "d30708bf-34f0-45e8-b452-b871daf15be4",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "code": "BP-ALSO-CA301",
      "package": "E5",
      "name": "BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "104a9da2-2ec0-42cd-a2ca-a80476fb1b91"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA400",
      "package": "E5",
      "name": "BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "code": "BP-ALSO-CA401",
      "package": "E5",
      "name": "BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "2793995e-0a7d-40d7-bd35-6968ba142197",
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4e58241c-417a-4466-b8a8-1393423cdd59"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "code": "BP-ALSO-CA402",
      "package": "E5",
      "name": "BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4cb01525-690b-430c-b57e-d596d3c934dd"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA403",
      "package": "E5",
      "name": "BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "ca95bd45-484c-408a-8e02-ca8bd5807807"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA404",
      "package": "E5",
      "name": "BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a52017f5-feda-4995-a5c0-b7268df6959a"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation.json",
      "code": "E5-ALSO-CA106",
      "package": "E5",
      "name": "E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [
            "c1"
          ],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "6bc75aa3-f325-490a-8037-af3ec80c4f4c"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "56d48bb9-d207-488e-9563-f00df57b8091"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000004",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Phishing-resistant MFA",
          "description": "Phishing-resistant, Passwordless methods for the strongest authentication, such as a FIDO2 security key",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": null,
          "type": null,
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "everyTime",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser.json",
      "code": "E5-ALSO-CA201",
      "package": "E5",
      "name": "E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser.json",
      "conditions": {
        "userRiskLevels": [
          "high"
        ],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "06dcf76a-e5f9-4423-ba55-1301c4142933"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn.json",
      "code": "E5-ALSO-CA210",
      "package": "E5",
      "name": "E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E5/ConditionalAccess/E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [
          "high"
        ],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7e616cac-0365-48ce-b8ce-8b469f9507a8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA501-Agents-AllApps-AnyPlatform-Block-HighRiskAgent.json",
      "code": "A365-ALSO-CA501",
      "package": "E7",
      "name": "A365-ALSO-CA501-Agents-AllApps-AnyPlatform-Block-HighRiskAgent",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA501-Agents-AllApps-AnyPlatform-Block-HighRiskAgent.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "agentIdRiskLevels": "high",
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "None"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "clientApplications": {
          "includeServicePrincipals": [],
          "includeAgentIdServicePrincipals": [
            "All"
          ],
          "excludeServicePrincipals": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA502-Agents-AllAgentIdentities-AllAgentResources-Block-AllExceptSelected.json",
      "code": "A365-ALSO-CA502",
      "package": "E7",
      "name": "A365-ALSO-CA502-Agents-AllAgentIdentities-AllAgentResources-Block-AllExceptSelected",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA502-Agents-AllAgentIdentities-AllAgentResources-Block-AllExceptSelected.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "AllAgentIdResources"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "None"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "clientApplications": {
          "includeServicePrincipals": [],
          "includeAgentIdServicePrincipals": [
            "All"
          ],
          "excludeServicePrincipals": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA503-Agents-AllAgentUsers-Grant-RequireCompliantDevice.json",
      "code": "A365-ALSO-CA503",
      "package": "E7",
      "name": "A365-ALSO-CA503-Agents-AllAgentUsers-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA503-Agents-AllAgentUsers-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "None"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "agents": {
          "includeAgentUsers": [
            "All"
          ],
          "excludeAgentUsers": [],
          "agentFilter": null
        },
        "agentContext": {
          "includeAgentContexts": [
            "agentUserSessionsInitiatedFromEndpoints"
          ],
          "excludeAgentContexts": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA504-Agents-AllAgentUsers-AllResources-Block-RiskyAgents.json",
      "code": "A365-ALSO-CA504",
      "package": "E7",
      "name": "A365-ALSO-CA504-Agents-AllAgentUsers-AllResources-Block-RiskyAgents",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA504-Agents-AllAgentUsers-AllResources-Block-RiskyAgents.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "agentIdRiskLevels": "medium,high",
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "None"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "agents": {
          "includeAgentUsers": [
            "All"
          ],
          "excludeAgentUsers": [],
          "agentFilter": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA505-Agents-AllAgentUsers-AllResources-Block-RequireCompliantNetWork.json",
      "code": "A365-ALSO-CA505",
      "package": "E7",
      "name": "A365-ALSO-CA505-Agents-AllAgentUsers-AllResources-Block-RequireCompliantNetWork",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/A365-ALSO-CA505-Agents-AllAgentUsers-AllResources-Block-RequireCompliantNetWork.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "applications": {
          "includeApplications": [
            "AllAgentIdResources"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "None"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "3d46dbda-8382-466a-856d-eb00cbc6b910"
          ]
        },
        "agents": {
          "includeAgentUsers": [
            "All"
          ],
          "excludeAgentUsers": [],
          "agentFilter": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA000",
      "package": "E7",
      "name": "BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA000-Global-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "674bf47b-2f56-435b-a27a-0e3ae75625e4",
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d30708bf-34f0-45e8-b452-b871daf15be4"
          ],
          "includeRoles": [],
          "excludeRoles": [
            "d29b2b05-8046-44ba-8758-1e26182fcf32"
          ],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "code": "BP-ALSO-CA001",
      "package": "E7",
      "name": "BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA001-Global-AllApps-AnyPlatform-Block-ExceptWhitelListedCountries.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "96bf7246-bf27-4ff0-9efb-9f4833d85682",
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "1eabdd99-1dab-48c5-8992-2988de9f441b"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "code": "BP-ALSO-CA002",
      "package": "E7",
      "name": "BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA002-Global-AllApps-AnyPlatform-Block-LegacyAuthentication.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "exchangeActiveSync",
          "other"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f6faa1ed-6de1-4426-aa00-5ce8a00a6db6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA003",
      "package": "E7",
      "name": "BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA003-Global-RegisterOrJoinDevice-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [],
          "excludeApplications": [],
          "includeUserActions": [
            "urn:user:registerdevice"
          ],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "1db7af05-320a-45d3-964f-165b87ab997f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "code": "BP-ALSO-CA004",
      "package": "E7",
      "name": "BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA004-Global-AllApps-AnyPlatform-Block-AuthenticationFlowsAndDeviceCodeFlow.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "905a8ab8-213d-4e24-8852-47bbb1eb3902"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "authenticationFlows": {
          "transferMethods": "deviceCodeFlow,authenticationTransfer"
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "code": "BP-ALSO-CA005",
      "package": "E7",
      "name": "BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA005-Global-Microsoft365-iOSAndAndroid-ClientApps-Unmanaged-Grant-RequireAppProtectionPoliciy.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "Office365"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "af42ab8f-4f12-4fc0-95e4-d8ea2f3c4c7f"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantApplication"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "code": "BP-ALSO-CA006",
      "package": "E7",
      "name": "BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA006-Global-Office365-AnyPlatform-Browser-Unmanaged-Grant-RequireAppEnforceRestrictions.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "00000003-0000-0ff1-ce00-000000000000",
            "00000002-0000-0ff1-ce00-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "cf55f879-ef6c-49fb-a9f6-5ec30816108c"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.isCompliant -eq True -and device.deviceOwnership -eq \"Company\""
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "applicationEnforcedRestrictions": {
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA100",
      "package": "E7",
      "name": "BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA100-Admins-AdminPortals-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000002",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Multifactor authentication",
          "description": "Combinations of methods that satisfy strong authentication, such as a password + SMS",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor",
            "deviceBasedPush",
            "temporaryAccessPassOneTime",
            "temporaryAccessPassMultiUse",
            "password,microsoftAuthenticatorPush",
            "password,softwareOath",
            "password,hardwareOath",
            "password,sms",
            "password,voice",
            "federatedMultiFactor",
            "microsoftAuthenticatorPush,federatedSingleFactor",
            "softwareOath,federatedSingleFactor",
            "hardwareOath,federatedSingleFactor",
            "sms,federatedSingleFactor",
            "voice,federatedSingleFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA101",
      "package": "E7",
      "name": "BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA101-Admins-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "code": "BP-ALSO-CA102",
      "package": "E7",
      "name": "BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA102-Admins-AllApps-AnyPlatform-Grant-RequireSigninFrequency4H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "6f7cd606-1b7d-4474-9570-175fccbbb4d1"
          ],
          "includeRoles": [
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 4,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA103",
      "package": "E7",
      "name": "BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA103-Admins-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7fa2d23c-701e-4870-b2c5-a0057006317b"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "code": "BP-ALSO-CA104",
      "package": "E7",
      "name": "BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA104-Admins-AllApps-AnyPlatform-Grant-CAEEnforceLocation.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "0e20bd8b-8cbd-414a-9015-7cb4d65cb1c7"
          ],
          "includeRoles": [
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "62e90394-69f5-4237-9190-012177145e10",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "code": "BP-ALSO-CA105",
      "package": "E7",
      "name": "BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA105-Admins-AllApps-AnyPlatform-Grant-PhishingResistantMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "14d82eec-204b-4c2f-b7e8-296a70dab67e"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a8615919-e9cd-4169-9f0c-ec5e54f382dd"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000004",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Phishing-resistant MFA",
          "description": "Phishing-resistant, Passwordless methods for the strongest authentication, such as a FIDO2 security key",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA107",
      "package": "E7",
      "name": "BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA107-Admins-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "633c497f-4a0b-4ff6-96e5-b7202095f714"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA108",
      "package": "E7",
      "name": "BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA108-Admins-AllApps-MacOS-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b2ae804e-d603-4f46-a199-5b0f82afef91"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA109",
      "package": "E7",
      "name": "BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA109-Admins-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "d0c1599c-1e9f-46da-96f0-29ef8457054d"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA110",
      "package": "E7",
      "name": "BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA110-Admins-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "04111cd6-fe21-48be-bf31-eab50efa4d98"
          ],
          "includeRoles": [
            "62e90394-69f5-4237-9190-012177145e10",
            "194ae4cb-b126-40b2-bd5b-6091b380977d",
            "f28a1f50-f6e7-4571-818b-6a12f2af6b6c",
            "29232cdf-9323-42fd-ade2-1d097af3e4de",
            "b1be1c3e-b65d-4f19-8427-f6fa0d97feb9",
            "729827e3-9c14-49f7-bb1b-9608f156bbb8",
            "b0f54661-2d74-4c50-afa3-1ec803f12efe",
            "fe930be7-5e62-47db-91af-98c3a49a38b1",
            "c4e39bd9-1100-46d3-8c65-fb160da0071f",
            "9b895d92-2cd3-44c7-9d02-a6ac2d5ea5c3",
            "158c047a-c907-4556-b7ef-446551a6b5f7",
            "966707d0-3269-4727-9be2-8c3a10f19b9d",
            "7be44c8a-adaf-4e2a-84d6-ab2649e08a13",
            "e8611ab8-c189-46e8-94e1-60213ab1f814",
            "f2ef992c-3afb-46b9-b7cf-a126ee74c451",
            "3a2c62db-5318-420d-8d74-23affee5d9d5",
            "d2562ede-74db-457e-a7b6-544e236ebb61",
            "db506228-d27e-4b7d-95e5-295956d6615f",
            "6b942400-691f-4bf0-9d12-d8a254a2baf5",
            "e93e3737-fa85-474a-aee4-7d3fb86510f3",
            "b6a27b2b-f905-4b2e-81b5-0d90e0ef1fdb",
            "1707125e-0aa2-4d4d-8655-a7c786c76a25",
            "69091246-20e8-4a56-aa4d-066075b2a7a8",
            "11451d60-acb2-45eb-a7d6-43d0f0125c13"
          ],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA200",
      "package": "E7",
      "name": "BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA200-Internals-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "code": "BP-ALSO-CA202",
      "package": "E7",
      "name": "BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA202-Internals-AllApps-UnmanagedWindowsAndMacOs-Grant-RequireSigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a17ab193-9ce3-4d1b-b8c1-081133da29af"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows",
            "macOS"
          ],
          "excludePlatforms": []
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA203",
      "package": "E7",
      "name": "BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA203-Internals-IntuneEnrollment-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "b0dcc8c3-4dd5-48c5-a95f-ee1cf9e193cb"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": null,
          "type": null,
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "everyTime",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "code": "BP-ALSO-CA204",
      "package": "E7",
      "name": "BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA204-Internals-AllApps-AnyPlatform-Block-UnknownPlatforms.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "3fc74b7e-87fb-4bca-ac4a-4c61c6d06c31"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "all"
          ],
          "excludePlatforms": [
            "android",
            "iOS",
            "windows",
            "macOS"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA205",
      "package": "E7",
      "name": "BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA205-Internals-AllApps-Windows-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "8baec328-5076-4e0c-bc13-6b9881998c21"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "windows"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "code": "BP-ALSO-CA206",
      "package": "E7",
      "name": "BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA206-Internals-AllApps-AnyPlatform-Grant-DIsablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7af9785c-8986-4f93-81b6-22d1e42fa9d6"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "devices": {
          "includeDeviceStates": [],
          "excludeDeviceStates": [],
          "includeDevices": [],
          "excludeDevices": [],
          "deviceFilter": {
            "mode": "exclude",
            "rule": "device.deviceOwnership -eq \"Company\" -or device.isCompliant -eq True"
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA207",
      "package": "E7",
      "name": "BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA207-Internals-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "f53895d3-095d-408f-8e93-8f94b391404e"
          ],
          "excludeApplications": [
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "c49752b3-06c1-4b65-baa3-e94bba9b9956"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA208",
      "package": "E7",
      "name": "BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA208-Internals-AllApps-MacOs-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "0000000a-0000-0000-c000-000000000000"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "43eccef5-259a-458f-a0a1-037f6fe0f05d"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "macOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "code": "BP-ALSO-CA209",
      "package": "E7",
      "name": "BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA209-Internals-AllApps-AnyPlatform-EnforceLocationCAE.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "e56cc655-ecfb-4e0e-a4db-5f343faf28a8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "persistentBrowser": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "continuousAccessEvaluation": {
          "mode": "strictLocation"
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "code": "BP-ALSO-CA211",
      "package": "E7",
      "name": "BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA211-Internals-AllApps-iOSandAndroid-Grant-RequireCompliantDevice.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [
            "All"
          ],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "platforms": {
          "includePlatforms": [
            "android",
            "iOS"
          ],
          "excludePlatforms": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "compliantDevice"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "code": "BP-ALSO-CA300",
      "package": "E7",
      "name": "BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA300-ServiceAccounts-AllApps-AnyPlatform-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "c10c6d70-03c4-47aa-a304-fce5007f15e4",
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f5cf741b-c984-4f74-b238-630ac850d530",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8",
            "40c4244d-4400-40f0-864f-8b51fbef2ee9",
            "d30708bf-34f0-45e8-b452-b871daf15be4",
            "674bf47b-2f56-435b-a27a-0e3ae75625e4"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": []
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "code": "BP-ALSO-CA301",
      "package": "E7",
      "name": "BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA301-ServiceAccounts-AllApps-AnyPlatform-Block-UntrustedLocations.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "eff25bf7-52c0-4b28-81ca-c7aa79fa804d"
          ],
          "excludeGroups": [
            "9d9b2abe-0fdb-4101-8d26-88a4e4229e55"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        },
        "locations": {
          "includeLocations": [
            "All"
          ],
          "excludeLocations": [
            "104a9da2-2ec0-42cd-a2ca-a80476fb1b91"
          ]
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "code": "BP-ALSO-CA400",
      "package": "E7",
      "name": "BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA400-GuestUsers-AllApps-AnyPlatform-Grant-RequireMFA.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "f728a0ac-7c5d-4f5d-b9b0-23e3b23e1bb8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "mfa"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "code": "BP-ALSO-CA401",
      "package": "E7",
      "name": "BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA401-GuestUsers-AllApps-AnyPlatform-Block-NonGuestAppAccess.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [
            "2793995e-0a7d-40d7-bd35-6968ba142197",
            "Office365"
          ],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4e58241c-417a-4466-b8a8-1393423cdd59"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "code": "BP-ALSO-CA402",
      "package": "E7",
      "name": "BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA402-GuestUsers-AllApps-AnyPlatform-Grant-SigninFrequency12H.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "4cb01525-690b-430c-b57e-d596d3c934dd"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": 12,
          "type": "hours",
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "timeBased",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "code": "BP-ALSO-CA403",
      "package": "E7",
      "name": "BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA403-GuestUsers-AllApps-AnyPlatform-Grant-DisablePersistentBrowser.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "ca95bd45-484c-408a-8e02-ca8bd5807807"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": null,
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "signInFrequency": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "persistentBrowser": {
          "mode": "never",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "code": "BP-ALSO-CA404",
      "package": "E7",
      "name": "BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/BP-ALSO-CA404-GuestUsers-SelectedApps-AnyPlatform-Block-SelectedApps.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "browser",
          "mobileAppsAndDesktopClients"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "MicrosoftAdminPortals"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "a52017f5-feda-4995-a5c0-b7268df6959a"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "excludeGuestsOrExternalUsers": null,
          "includeGuestsOrExternalUsers": {
            "guestOrExternalUserTypes": "internalGuest,b2bCollaborationGuest,b2bCollaborationMember,b2bDirectConnectUser,otherExternalUser,serviceProvider",
            "externalTenants": {
              "membershipKind": "all"
            }
          }
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation.json",
      "code": "E5-ALSO-CA106",
      "package": "E7",
      "name": "E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA106-Tier0Admins-AllApps-AnyPlatform-Grant-RequirePhishingResistantMFAOnRoleActivation.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [
            "c1"
          ],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "6bc75aa3-f325-490a-8037-af3ec80c4f4c"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "56d48bb9-d207-488e-9563-f00df57b8091"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": {
          "id": "00000000-0000-0000-0000-000000000004",
          "createdDateTime": "2021-12-01T08:00:00Z",
          "modifiedDateTime": "2021-12-01T08:00:00Z",
          "displayName": "Phishing-resistant MFA",
          "description": "Phishing-resistant, Passwordless methods for the strongest authentication, such as a FIDO2 security key",
          "policyType": "builtIn",
          "requirementsSatisfied": "mfa",
          "allowedCombinations": [
            "windowsHelloForBusiness",
            "fido2",
            "x509CertificateMultiFactor"
          ],
          "combinationConfigurations": []
        }
      },
      "sessionControls": {
        "disableResilienceDefaults": null,
        "applicationEnforcedRestrictions": null,
        "cloudAppSecurity": null,
        "persistentBrowser": null,
        "continuousAccessEvaluation": null,
        "secureSignInSession": null,
        "blockSensitiveActions": null,
        "humanApproval": null,
        "signInFrequency": {
          "value": null,
          "type": null,
          "authenticationType": "primaryAndSecondaryAuthentication",
          "frequencyInterval": "everyTime",
          "isEnabled": true
        }
      }
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser.json",
      "code": "E5-ALSO-CA201",
      "package": "E7",
      "name": "E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA201-Internals-AllApps-AnyPlatform-Block-HighRiskUser.json",
      "conditions": {
        "userRiskLevels": [
          "high"
        ],
        "signInRiskLevels": [],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "06dcf76a-e5f9-4423-ba55-1301c4142933"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    },
    {
      "key": "ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn.json",
      "code": "E5-ALSO-CA210",
      "package": "E7",
      "name": "E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn",
      "state": "disabled",
      "url": "https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/71688eed941d2d1f7ebe75709018b5954cfd1b6d/ALSO_CA_E7/ConditionalAccess/E5-ALSO-CA210-Internals-AllApps-AnyPlatform-Block-HighRiskSignIn.json",
      "conditions": {
        "userRiskLevels": [],
        "signInRiskLevels": [
          "high"
        ],
        "clientAppTypes": [
          "all"
        ],
        "platforms": null,
        "locations": null,
        "times": null,
        "deviceStates": null,
        "devices": null,
        "clientApplications": null,
        "agents": null,
        "applications": {
          "includeApplications": [
            "All"
          ],
          "excludeApplications": [],
          "includeUserActions": [],
          "includeAgentActions": [],
          "includeAuthenticationContextClassReferences": [],
          "applicationFilter": null
        },
        "users": {
          "includeUsers": [],
          "excludeUsers": [],
          "includeGroups": [
            "f0dcac6d-3f42-4627-8b8f-56a57f708f22"
          ],
          "excludeGroups": [
            "57802f85-25a5-4c18-8bbb-a997259455a0",
            "7e616cac-0365-48ce-b8ce-8b469f9507a8"
          ],
          "includeRoles": [],
          "excludeRoles": [],
          "includeGuestsOrExternalUsers": null,
          "excludeGuestsOrExternalUsers": null
        }
      },
      "grantControls": {
        "operator": "OR",
        "builtInControls": [
          "block"
        ],
        "customAuthenticationFactors": [],
        "termsOfUse": [],
        "authenticationStrength": null
      },
      "sessionControls": null
    }
  ]
};
