import type { ApiResponse } from '@/types/breakdown'

export const sampleData: ApiResponse = {
  breakdown: {
    autoPitches: [
      { name: 'Modern Rap', slug: 'modernRap' },
    ],
    bpm: 120,
    effectPresets: [
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/covers/8BitDrums.webp',
        name: '8Bit Drums',
        slug: '8BitDrums',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/covers/breakdownFilter.webp',
        name: 'Breakdown Filter V3',
        slug: 'breakdownFilter_v3',
      },
    ],
    effects: [
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/bossGE7.png',
        name: 'Boss GE7',
        slug: 'bossGE7',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/shaper.png',
        isMembershipOnly: true,
        name: 'Shaper',
        slug: 'shaper',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/ehSmallStone.png',
        name: 'Eh Small Stone',
        slug: 'ehSmallStone',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/lofi.png',
        name: 'Lofi',
        slug: 'lofi',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/backCompr.png',
        name: 'Back Compr',
        slug: 'backCompr',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/pumper2.png',
        isMembershipOnly: true,
        name: 'Pumper2',
        slug: 'pumper2',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/filter.png',
        isMembershipOnly: true,
        name: 'Filter',
        slug: 'filter',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/phaser.png',
        name: 'Phaser',
        slug: 'phaser',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/dimensionD.png',
        name: 'Dimension D',
        slug: 'dimensionD',
      },
      {
        imageUrl: 'https://static.bandlab.com/effects/v10.2/preview-images/la2aCompr.png',
        name: 'La2a Compr',
        slug: 'la2aCompr',
      },
    ],
    instruments: [
      {
        imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/instrument-keyboard-piano.svg',
        name: 'Studio Grand V2 V4',
        soundbankSlug: 'studio-grand-v2-v4',
        type: 'piano',
      },
      {
        imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/instrument-voice.svg',
        name: 'Voice',
        type: 'voice',
      },
      {
        imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/instrument-looper.svg',
        name: 'Looper',
        type: 'looper',
      },
      {
        imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/instrument-sampler.svg',
        name: 'Sampler',
        type: 'sampler',
      },
      {
        imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/instrument-guitar-electric.svg',
        name: 'Guitar Electric',
        type: 'guitar-electric',
      },
    ],
    key: 'G minor',
    loopPacks: [
      { name: 'Jersey Footwork Pocket', slug: 'jersey-footwork-pocket' },
      { name: 'Digit Darkside Dnb Pocket', slug: 'digit-darkside-dnb-pocket' },
    ],
    mastering: {
      imageUrl: 'https://bandlabstorageasia.blob.core.windows.net/images/studio-tools/audio-mastering-clarity.svg',
      intensity: 50,
      name: 'Enhance Clarity',
      slug: 'enhanceClarity',
    },
    samplerKits: [],
    timeSignature: '4/4',
    trackCount: 8,
  },
}
