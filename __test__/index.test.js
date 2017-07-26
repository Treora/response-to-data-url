/* eslint-env jest */

import { dataURLToBlob } from 'blob-util'
import 'whatwg-fetch'

import responseToDataURL from '../src'

const imageDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg=='

describe('responseToDataURL tests', () => {
    let imageBlob

    beforeAll(async () => {
        imageBlob = await dataURLToBlob(imageDataUrl)
    })

    test('should convert a response to a dataURL', async () => {
        const response = new Response(imageBlob)
        const dataURL = await responseToDataURL(response)
        expect(dataURL).toBe(imageDataUrl)
    })
})
