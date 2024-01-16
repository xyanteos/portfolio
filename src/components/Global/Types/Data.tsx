export type ImageViewingType = {
    projectName : string,
    images: ImageType[]
}

export type ImageType = {
    name: string
    path: string,
    alt: string
}