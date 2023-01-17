export interface InfluencerModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: [
    {
      name: string;
    }
  ];
}
