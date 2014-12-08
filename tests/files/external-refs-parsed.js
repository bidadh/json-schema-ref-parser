env.files.parsed.externalRefs =
{
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'description': 'This file includes $refs to external files',
    'title': 'external refs'
  },
  'paths': {
    '/pets': {
      'post': {
        'responses': {
          '200': {
            'description': 'references the "pet.yaml" file',
            'schema': {
              '$ref': 'http://./pet.yaml'
            }
          },
          'default': {
            'description': 'references the "error.yaml" file',
            'schema': {
              '$ref': 'http://./error.yaml'
            }
          }
        },
        'parameters': [
          {
            'required': true,
            'schema': {
              '$ref': 'http://./pet.yaml'
            },
            'description': 'references the "pet.yaml" file',
            'in': 'body',
            'name': 'pet'
          }
        ]
      }
    }
  }
};