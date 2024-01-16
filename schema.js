{
  "$metadata": {
    "type": "Json",
    "uris": {
      "jsonLdContext": "ipfs://QmUz5piCZqJ85ZjUE5KBW5z9txyZQp8aSvm9nFWPk4ectL"
    },
    "version": "1.0"
  },
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "This is a schema for issuing VC for ABC's college degree ",
  "title": "ABC college degree certificate",
  "properties": {
    "@context": {
      "type": [
        "string",
        "array",
        "object"
      ]
    },
    "expirationDate": {
      "format": "date-time",
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "issuanceDate": {
      "format": "date-time",
      "type": "string"
    },
    "issuer": {
      "type": [
        "string",
        "object"
      ],
      "format": "uri",
      "properties": {
        "id": {
          "format": "uri",
          "type": "string"
        }
      },
      "required": [
        "id"
      ]
    },
    "type": {
      "type": [
        "string",
        "array"
      ],
      "items": {
        "type": "string"
      }
    },
    "credentialSubject": {
      "description": "Stores the data of the credential",
      "title": "Credential subject",
      "properties": {
        "id": {
          "description": "Stores the DID of the subject that owns the credential",
          "title": "Credential subject ID",
          "format": "uri",
          "type": "string"
        },
        "cgpa": {
          "description": "This is a cgma number",
          "title": "cgpa",
          "type": "number"
        }
      },
      "required": [
        "cgpa"
      ],
      "type": "object"
    },
    "credentialSchema": {
      "properties": {
        "id": {
          "format": "uri",
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "type"
      ],
      "type": "object"
    }
  },
  "required": [
    "@context",
    "id",
    "issuanceDate",
    "issuer",
    "type",
    "credentialSubject",
    "credentialSchema"
  ],
  "type": "object"
}
