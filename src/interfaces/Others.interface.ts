
export type OTPScreenType = 'FORGOT_PASSWORD' | 'EMAIL_VERIFICATION';

export type ToastMessageType = 'error' | 'success' | 'info';

export type AccountDeletionType = 'none' | 'deleteUserAccount' | 'deleteUserAccountData'

export interface LatLongInterface {
    latitude: number
    longitude: number
}
export interface ChartViewInterface {
    hour: number
    cloudySkyEnergy: number
    clearSkyEnergy: number
    date: string
}

export interface QuizDataInterface {
    _id: string
    unitNo: number
    lessonNo: number
    score: number
}