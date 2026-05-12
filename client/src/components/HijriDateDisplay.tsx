// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | emad.cs.albalawi@gmail.com
import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { formatHijriDate, formatDualDate, formatSaudiDateTime, getCurrentHijriDate } from "@/lib/hijriCalendar";

interface HijriDateDisplayProps {
  date?: Date;
  showBoth?: boolean;
  showTime?: boolean;
  compact?: boolean;
  lang?: "ar" | "en";
  className?: string;
}

export function HijriDateDisplay({
  date,
  showBoth = true,
  showTime = false,
  compact = false,
  lang = "ar",
  className = ""
}: HijriDateDisplayProps) {
  const [currentDate, setCurrentDate] = useState(date || new Date());

  useEffect(() => {
    if (!date) {
      const interval = setInterval(() => setCurrentDate(new Date()), 60000);
      return () => clearInterval(interval);
    }
  }, [date]);

  const hijri = formatHijriDate(currentDate, { lang, includeMonthName: !compact });
  const gregorian = currentDate.toLocaleDateString(lang === "ar" ? "ar-SA" : "en-SA", {
    year: "numeric",
    month: compact ? "2-digit" : "long",
    day: "numeric"
  });
  const time = formatSaudiDateTime(currentDate, lang);

  if (compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className={`gap-1 cursor-default ${className}`}>
              <Calendar className="h-3 w-3" />
              <span className="text-xs">{hijri}</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-center">
              <p className="font-medium">{gregorian}</p>
              <p className="text-muted-foreground text-xs">{hijri}</p>
              {showTime && <p className="text-muted-foreground text-xs mt-1">{time}</p>}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      {showBoth ? (
        <>
          <div className="flex items-center gap-1.5 text-sm text-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>{gregorian}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3.5" />
            <span>{hijri}</span>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-1.5 text-sm">
          <Calendar className="h-3.5 w-3.5 text-primary" />
          <span>{hijri}</span>
        </div>
      )}
      {showTime && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Inline Hijri badge for use in table cells and cards
 */
export function HijriBadge({ date, lang = "ar" }: { date: Date | string | number; lang?: "ar" | "en" }) {
  const d = typeof date === "object" ? date : new Date(date);
  const hijri = formatHijriDate(d, { lang, includeMonthName: false });
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs text-muted-foreground cursor-default border-b border-dashed border-muted-foreground/40">
            {hijri}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{formatDualDate(d, lang)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/**
 * Live clock widget showing Saudi time + Hijri date
 */
export function SaudiClock({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = now.toLocaleTimeString(lang === "ar" ? "ar-SA" : "en-SA", {
    timeZone: "Asia/Riyadh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const { formatted: hijriFormatted } = getCurrentHijriDate();

  return (
    <div className="flex flex-col items-end gap-0.5">
      <div className="flex items-center gap-1.5 text-sm font-mono font-medium">
        <Clock className="h-3.5 w-3.5 text-primary" />
        <span>{timeStr}</span>
        <span className="text-xs text-muted-foreground">(AST)</span>
      </div>
      <span className="text-xs text-muted-foreground">{hijriFormatted}</span>
    </div>
  );
}
