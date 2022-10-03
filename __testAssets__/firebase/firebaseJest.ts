import { readFileSync } from 'fs'
import { initializeTestEnvironment } from '@firebase/rules-unit-testing'

export const getTestEnv = async () => {
    const testEnv = await initializeTestEnvironment({
        projectId: 'chiquezi',
        firestore: {
            host: 'localhost',
            port: 8080,
            rules: readFileSync('firestore.rules', 'utf8'),
          }
      })
    return testEnv
}
