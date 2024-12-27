import { apiClient } from "./config";


export const apiAddGallery = async ( payload ) => apiClient.post("/gallery", payload)

export const apiGetGallery = async () => apiClient.get("/gallery")


export const apiGetSingleGallery = async (id) => apiClient.get(`/gallery/${id}`)

export const apiUpdateGallery = async (id, payload) => {
 
    const gallery = await apiClient.patch(`/gallery/${id}`, payload)
 
    return gallery
}

export const apiDelGallery = async (id) => apiClient.delete(`/gallery/${id}`)