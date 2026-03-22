export interface AutoPitch {
  name: string
  slug: string
}

export interface EffectPreset {
  imageUrl: string
  name: string
  slug: string
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
}

export interface SamplerKit {
  name: string
  slug: string
}

export interface StudioBreakdown {
  autoPitches: AutoPitch[]
  bpm: number
  effectPresets: EffectPreset[]
  effects: Effect[]
  instruments: Instrument[]
  key: string
  loopPacks: LoopPack[]
  mastering: Mastering | null
  samplerKits: SamplerKit[]
  timeSignature: string
  trackCount: number
}

export interface ApiResponse {
  breakdown: StudioBreakdown
}
