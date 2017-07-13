export default function responseToDataUrl(response) {
    return response.blob().then(
        blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onerror = () => reject(reader.error)
            reader.readAsDataURL(blob)
        })
    )
}
