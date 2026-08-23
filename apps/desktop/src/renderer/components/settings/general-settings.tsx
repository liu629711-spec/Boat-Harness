import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@palot/ui/components/select"
import { Switch } from "@palot/ui/components/switch"
import { useAtomValue, useSetAtom } from "jotai"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { type DisplayMode, displayModeAtom, languageAtom, opaqueWindowsAtom } from "../../atoms/preferences"
import { useColorScheme, useSetColorScheme } from "../../hooks/use-theme"
import { useI18n } from "../../lib/i18n"
import type { ColorScheme } from "../../lib/themes"
import { fetchOpenInTargets, setOpenInPreferred } from "../../services/backend"
import { SettingsRow } from "./settings-row"
import { SettingsSection } from "./settings-section"

const isElectron = typeof window !== "undefined" && "palot" in window

export function GeneralSettings() {
	const { t } = useI18n()
	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-xl font-semibold">{t("General")}</h2>
			</div>

			<SettingsSection>
				<OpenDestinationRow />
			</SettingsSection>

			<SettingsSection title={t("Appearance")}>
				<ThemeRow />
				<LanguageRow />
				<OpaqueWindowsRow />
				<DisplayModeRow />
			</SettingsSection>
		</div>
	)
}

function OpenDestinationRow() {
	const { t } = useI18n()
	const [targets, setTargets] = useState<{ id: string; label: string; available: boolean }[]>([])
	const [preferred, setPreferred] = useState<string | null>(null)

	useEffect(() => {
		if (!isElectron) return
		fetchOpenInTargets().then((result) => {
			setTargets(result.targets.filter((t) => t.available))
			setPreferred(result.preferredTarget)
		})
	}, [])

	const handleChange = useCallback(async (value: string) => {
		setPreferred(value)
		await setOpenInPreferred(value)
	}, [])

	if (targets.length === 0) return null

	return (
		<SettingsRow
			label={t("Default open destination")}
			description={t("Where files and folders open by default")}
		>
			<Select
				value={preferred ?? undefined}
				onValueChange={(v) => {
					if (v !== null) handleChange(v)
				}}
			>
				<SelectTrigger className="min-w-[180px]">
					<SelectValue placeholder={t("Select...")} />
				</SelectTrigger>
				<SelectContent>
					{targets.map((t) => (
						<SelectItem key={t.id} value={t.id}>
							{t.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</SettingsRow>
	)
}

function ThemeRow() {
	const { t } = useI18n()
	const colorScheme = useColorScheme()
	const setColorScheme = useSetColorScheme()

	const options: { value: ColorScheme; label: string; icon: typeof SunIcon }[] = [
		{ value: "light", label: t("Light"), icon: SunIcon },
		{ value: "dark", label: t("Dark"), icon: MoonIcon },
		{ value: "system", label: t("System"), icon: MonitorIcon },
	]

	return (
		<SettingsRow label={t("Theme")} description={t("Use light, dark, or match your system")}>
			<div className="flex items-center rounded-md border border-border">
				{options.map((opt) => {
					const Icon = opt.icon
					const isActive = colorScheme === opt.value
					return (
						<button
							key={opt.value}
							type="button"
							onClick={() => setColorScheme(opt.value)}
							className={`flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors first:rounded-l-md last:rounded-r-md ${
								isActive
									? "bg-accent text-accent-foreground font-medium"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							<Icon aria-hidden="true" className="size-3.5" />
							{opt.label}
						</button>
					)
				})}
			</div>
		</SettingsRow>
	)
}

function LanguageRow() {
	const language = useAtomValue(languageAtom)
	const setLanguage = useSetAtom(languageAtom)
	const { t } = useI18n()

	return (
		<SettingsRow label={t("Language")} description={t("Choose the language used by the BoatHarness interface")}>
			<Select value={language} onValueChange={(value) => setLanguage(value as "zh-CN" | "en-US")}>
				<SelectTrigger className="min-w-[140px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="zh-CN">{t("Chinese")}</SelectItem>
					<SelectItem value="en-US">{t("English")}</SelectItem>
				</SelectContent>
			</Select>
		</SettingsRow>
	)
}

function OpaqueWindowsRow() {
	const { t } = useI18n()
	const opaque = useAtomValue(opaqueWindowsAtom)
	const setOpaque = useSetAtom(opaqueWindowsAtom)

	const handleChange = useCallback(
		async (checked: boolean) => {
			setOpaque(checked)
			if (isElectron) {
				await window.palot.setOpaqueWindows(checked)
				// Requires relaunch -- prompt or auto-relaunch
				window.palot.relaunch()
			}
		},
		[setOpaque],
	)

	return (
		<SettingsRow
			label={t("Use opaque background")}
			description={t("Make windows use a solid background rather than system translucency")}
		>
			<Switch checked={opaque} onCheckedChange={handleChange} />
		</SettingsRow>
	)
}

function DisplayModeRow() {
	const { t } = useI18n()
	const displayMode = useAtomValue(displayModeAtom)
	const setDisplayMode = useSetAtom(displayModeAtom)

	return (
		<SettingsRow
			label={t("Display mode")}
			description={t("Adjust how much detail is shown in conversations")}
		>
			<Select
				value={displayMode}
				onValueChange={(v) => setDisplayMode(v as DisplayMode)}
				items={{ default: t("Default"), verbose: t("Verbose") }}
			>
				<SelectTrigger className="min-w-[140px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="default">{t("Default")}</SelectItem>
					<SelectItem value="verbose">{t("Verbose")}</SelectItem>
				</SelectContent>
			</Select>
		</SettingsRow>
	)
}
