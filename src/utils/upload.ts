export const uploadImages = async (uploadFiles: File[]): Promise<string[]> =>
  await Promise.all(
    uploadFiles.map(async file => {
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', process.env.CLOUDINARY_PRESET)

      const response = await fetch(process.env.CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: data,
      })
      const uploadData = await response.json()

      return uploadData.secure_url as string
    })
  )
