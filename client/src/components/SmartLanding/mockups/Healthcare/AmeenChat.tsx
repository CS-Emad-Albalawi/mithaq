// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Ameen conversation mockup — 5-message chat exchange between a nurse
 * and Ameen. Bubbles alternate sides. Ameen advises proper PHI channels.
 */
import { Bot, User } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Msg { from: "user" | "ameen"; key: string }

const MESSAGES: readonly Msg[] = [
  { from: "user",  key: "smartLanding.mockups.healthcare.ameen_msg_user_1"  },
  { from: "ameen", key: "smartLanding.mockups.healthcare.ameen_msg_ameen_1" },
  { from: "ameen", key: "smartLanding.mockups.healthcare.ameen_msg_ameen_2" },
  { from: "ameen", key: "smartLanding.mockups.healthcare.ameen_msg_ameen_3" },
  { from: "user",  key: "smartLanding.mockups.healthcare.ameen_msg_user_2"  },
] as const;

export function AmeenChat() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_healthcare">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.healthcare.ameen_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.healthcare.ameen_subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-2 p-3 rounded-md bg-[var(--bg-surface-2)] border border-[var(--border-color)] max-h-72 overflow-hidden">
          {MESSAGES.map((m, i) => {
            const isUser = m.from === "user";
            return (
              <div
                key={i}
                className={`flex items-end gap-1.5 ${isUser ? "justify-start" : "justify-end"}`}
              >
                {isUser && (
                  <div
                    className="w-6 h-6 rounded-full bg-[var(--navy-glow)] text-[var(--navy-primary)] flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <User className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`
                    max-w-[78%] px-3 py-2 text-xs leading-relaxed
                    ${isUser
                      ? "rounded-2xl rounded-bl-sm bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)]"
                      : "rounded-2xl rounded-br-sm bg-[var(--navy-primary)] text-white"}
                  `}
                >
                  {t(m.key)}
                </div>
                {!isUser && (
                  <div
                    className="w-6 h-6 rounded-full bg-[var(--navy-primary)] text-white flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Bot className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MockupFrame>
  );
}

export default AmeenChat;
