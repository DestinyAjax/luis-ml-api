const luis = {
    "intent": {
        "add": {
            "success": {
                "res": {
                    "statusCode": 200,
                    "headers": {
                      "content-type": "application/json"
                    }
                },
                "body": {
                    "statusCode": 201,
                    "body": "21c71479-2fd2-4851-9e62-3aa16f6649f8"
                }
            }
        }
    },
    "utterance": {
        "add": {
            "success": {
                "res": {
                    "statusCode": 200,
                    "headers": {
                      "content-type": "application/json"
                    }
                },
                "body": [
                    {"value":{"ExampleId":628124133,"UtteranceText":"switch the lights to green"},"hasError":false}
                ],
            },
            "error": {
                "code":"BadArgument",
                "message":"Failed to parse example labeling objects. Parameter name: exampleLabelObjects"
            }
        }
    },
    "train": {
        "success": {
            "res": {
                "statusCode": 200,
                "headers": {
                    "content-type": "application/json"
                }
            },
            "body": {
                "statusId": 9,
                "status": "Queued"
            }
        }
    },
    "publish": {
        "success": {
            "res": {
                "statusCode": 200,
                "headers": {
                    "content-type": "application/json"
                }
            },
            "body": {
                "versionId": "0.1",
                "directVersionPublish": false,
                "endpointUrl": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ddcb0dee-1ba1-413f-87ef-019a23bb62c0",
                "isStaging": false,
                "assignedEndpointKey": null,
                "region": "centralus, westus, eastus2, westcentralus, southeastasia, southcentralus, westus2, eastus, eastasia, brazilsouth, northcentralus, centraluseuap, eastus2euap, japaneast, japanwest, koreacentral, koreasouth, centralindia, southindia, canadacentral, canadaeast, eastuspc, southafricanorth, southafricawest",
                "endpointRegion": "westus",
                "publishedDateTime": "2019-10-16T08:36:49Z",
                "failedRegions": ""
            }
        }
    }
};

module.exports = luis;