export interface Activity {
  id: number;
  name: string;
  type: string;
  description?: string;
  equipment?: string[];
  time: number | string;
  setup: SetupLevel;
  tags: string[];
  youtubeLink?: string;
  warning?: string[];
  rounds?:boolean;
  timePerRound?:number;
  lastDone?: Date;
}

export enum SetupLevel {
  None = "none",
  Minimal = "minimal",
  Full = "full",
}

export class ActivityModel implements Activity {
  id: number;
  name: string;
  type: string;
  description?: string | undefined;
  equipment?: string[];
  time: number | string;
  setup: SetupLevel;
  tags: string[];
  youtubeLink?: string;
  warning?: string[];
  rounds?: boolean;
  timePerRound?: number;
  lastDone?: Date;

  constructor(data: Partial<Activity> & Pick<Activity, "id" | "name" | "type">) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;

    this.equipment = data.equipment ?? [];
    this.time = data.time ?? 0;
    this.setup = data.setup ?? SetupLevel.None;
    this.tags = data.tags ?? [];
    this.youtubeLink = data.youtubeLink;
    this.warning = data.warning;
    this.lastDone = data.lastDone;
    this.rounds = data.rounds ?? false;
    this.timePerRound = data.timePerRound;
    this.description = data.description;
  }

  get isNoSetup() {
    return this.setup === SetupLevel.None;
  }

  get isMinimalSetup() {
    return this.setup === SetupLevel.Minimal;
  }

  get isFullSetup() {
    return this.setup === SetupLevel.Full;
  }
}
