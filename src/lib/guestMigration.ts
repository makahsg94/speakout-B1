export interface GuestMigrationOptions {
  prefix: string
  toUserKey: (guestKey: string) => string
  onMigrated?: (guestKey: string) => void
}

export function carryGuestData(
  storage: Storage,
  options: GuestMigrationOptions,
): string[] {
  try {
    const migrated = migrateGuestData(storage, options)
    for (const key of migrated) options.onMigrated?.(key)
    return migrated
  } catch {
    /* storage unavailable — leave guest data where it is */
    return []
  }
}

const DATA_SUFFIXES = [
  '.progress.v1',
  '.milestones.v1',
  '.reminder.v1',
  '.review-hard-words',
  '.writing.draft.',
]

function isGuestDataKey(prefix: string, key: string): boolean {
  if (!key.startsWith(`${prefix}.`)) return false
  return DATA_SUFFIXES.some((suffix) => key.startsWith(`${prefix}${suffix}`))
}

/** Copy learning data saved while browsing as a guest into the new account. */
export function migrateGuestData(
  storage: Storage,
  options: GuestMigrationOptions,
): string[] {
  const migrated: string[] = []
  const keys = Array.from({ length: storage.length }, (_, i) => storage.key(i))
  for (const key of keys) {
    if (!key || !isGuestDataKey(options.prefix, key)) continue
    const value = storage.getItem(key)
    if (value === null) continue
    const target = options.toUserKey(key)
    if (storage.getItem(target) !== null) continue
    storage.setItem(target, value)
    storage.removeItem(key)
    migrated.push(key)
  }
  return migrated
}
