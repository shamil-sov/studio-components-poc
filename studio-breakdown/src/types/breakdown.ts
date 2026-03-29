export interface AutoPitch {
  name: string
  slug: string
  scale?: string
  isMembershipOnly?: boolean
}

export interface AutoPitch2 {
  name: string
  slug: string
  key: string
  scale: string
  responseTime: number
  mix: number
  algorithm: string
  isMembershipOnly?: boolean
}

export interface EffectPreset {
  imageUrl: string
  name: string
  slug: string
}

export interface PresetEffect {
  slug: string
  bypass: boolean
  imageUrl: string
}

export interface PresetCreator {
  userId: string
  username: string
}

export interface EffectPreset2 {
  name: string
  type: string
  slug: string
  imageUrl: string
  description?: string
  link?: string
  origin?: string
  effects?: PresetEffect[]
  creator?: PresetCreator
  modifiedOn?: string
}

export interface Effect {
  imageUrl: string
  name: string
  slug: string
  isMembershipOnly?: boolean
}

export interface Instrument {
  imageUrl: string
  name: string
  type: string
  soundbankSlug?: string
}

export interface LoopPack {
  name: string
  slug: string
}

export interface Mastering {
  imageUrl: string
  intensity: number
  name: string
  slug: string
  isMembershipOnly?: boolean
}

export interface SamplerKit {
  name: string
  slug: string
}

export interface BeatPicture {
  xs?: string
  s?: string
  m?: string
  l?: string
  url?: string
  isDefault?: boolean
  color?: string
}

export interface Beat {
  id: string
  name: string
  creatorName: string
  genre?: string
  key?: string
  bpm: number
  duration: number
  audioPreviewUrl?: string
  previewDuration?: number
  picture?: BeatPicture
  purchaseCountInPast30Days?: number
  moods?: string[]
  hasSpatialAudio?: boolean
  createdOn?: string
}

export interface SoundFeature {
  name: string
  bpm?: number
  key?: string
}

export interface SoundPack {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl: string
}

export interface Sound {
  id: string
  type: string
  name: string
  slug: string
  duration: number
  bars?: number
  audioUrl?: string
  imageUrl: string
  pack: SoundPack
  genres: string[]
  instruments: string[]
  characters: string[]
  features: SoundFeature[]
}

export interface SoundsUsed {
  total: number
  loops: number
  oneShots: number
}

export interface StudioBreakdown {
  autoPitches: AutoPitch[]
  autoPitches2?: AutoPitch2[]
  beats?: Beat[]
  bpm: number
  effectPresets: EffectPreset[]
  effectPresets2?: EffectPreset2[]
  effects: Effect[]
  instruments: Instrument[]
  key: string
  loopPacks: LoopPack[]
  mastering: Mastering | null
  samplerKits: SamplerKit[]
  sounds?: Sound[]
  soundsUsed?: SoundsUsed
  timeSignature: string
  trackCount: number
}

export interface ApiResponse {
  breakdown: StudioBreakdown
}
