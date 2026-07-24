export function formatMonthYear(yearMonth, locale) {
    const [year, month] = yearMonth.split('-').map(Number);
    const date = new Date(year, month - 1, 1);
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
}

// `t` is an i18next TFunction; expects experience.durationYear / experience.durationMonth
// keys (with _one/_other plural suffixes) in the active locale.
export function formatDuration(start, end, t) {
    const [startYear, startMonth] = start.split('-').map(Number);
    const now = new Date();
    const [endYear, endMonth] = end
        ? end.split('-').map(Number)
        : [now.getFullYear(), now.getMonth() + 1];

    const totalMonths = Math.max(0, (endYear - startYear) * 12 + (endMonth - startMonth));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts = [];
    if (years) parts.push(t('experience.durationYear', { count: years }));
    if (months || !years) parts.push(t('experience.durationMonth', { count: months }));
    return parts.join(' ');
}
