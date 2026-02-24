import { useState, type FormEvent } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const socialLinks = [
	{
		label: 'GitHub',
		href: 'https://github.com',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: 'Twitter/X',
		href: 'https://twitter.com',
		icon: (
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		),
	},
];

export default function Contact() {
	const { t } = useLanguage();
	const { ref, isVisible } = useScrollAnimation();
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 3000);
	};

	return (
		<section
			id="contact"
			className="py-28 relative overflow-hidden"
			style={{ backgroundColor: '#0F172A' }}
			ref={ref as any}
		>
			{/* Linha de acento crescente */}
			<div
				className={`absolute top-0 left-0 h-[2px] transition-all duration-700 ${isVisible ? 'w-full' : 'w-0'}`}
				style={{ backgroundColor: 'rgba(29,78,216,0.3)' }}
			/>
			<div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
				{/* Header */}
				<div
					className={`mb-16 ${
						isVisible ? 'animate-fade-in-up' : 'opacity-0'
					}`}
				>
					<p
						className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
						style={{ color: '#1D4ED8' }}
					>
						Contact
					</p>
					<h2
						className="text-3xl sm:text-4xl font-bold"
						style={{ color: '#F1F5F9' }}
					>
						{t.contact.title}
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Info */}
					<div
						className={`space-y-10 ${
							isVisible ? 'animate-fade-in-left' : 'opacity-0'
						}`}
						style={{ animationDelay: '0.15s' }}
					>
						<p
							className="text-base leading-[1.8]"
							style={{ color: 'rgba(241, 245, 249, 0.6)' }}
						>
							{t.contact.subtitle}
						</p>

						<div
							className="space-y-4"
							style={{
								borderTop: '1px solid rgba(241, 245, 249, 0.08)',
								paddingTop: '2rem',
							}}
						>
							<div>
								<p
									className="text-xs tracking-widest uppercase mb-1"
									style={{ color: 'rgba(241, 245, 249, 0.35)' }}
								>
									Email
								</p>
								<p
									className="text-sm font-medium"
									style={{ color: '#E6D5C3' }}
								>
									contact@example.com
								</p>
							</div>
							<div>
								<p
									className="text-xs tracking-widest uppercase mb-1"
									style={{ color: 'rgba(241, 245, 249, 0.35)' }}
								>
									Location
								</p>
								<p
									className="text-sm font-medium"
									style={{ color: '#E6D5C3' }}
								>
									Brazil — Remote
								</p>
							</div>
						</div>

						<div className="flex gap-3">
							{socialLinks.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={s.label}
									className="flex items-center gap-2 px-3 py-2 rounded text-xs font-medium transition-colors duration-150 hover:text-[#E6D5C3]"
									style={{
										color: 'rgba(241, 245, 249, 0.5)',
										border: '1px solid rgba(241, 245, 249, 0.1)',
									}}
								>
									{s.icon}
									{s.label}
								</a>
							))}
						</div>
					</div>

					{/* Formulário */}
					<form
						onSubmit={handleSubmit}
						className={`flex flex-col gap-4 ${
							isVisible ? 'animate-fade-in-right' : 'opacity-0'
						}`}
						style={{ animationDelay: '0.3s' }}
					>
						<input
							type="text"
							required
							placeholder={t.contact.namePlaceholder}
							className="w-full px-4 py-3 text-sm rounded transition-all duration-200 focus:outline-none focus:border-[#1D4ED8]"
							style={{
								backgroundColor: 'rgba(241,245,249,0.06)',
								border: '1px solid rgba(241,245,249,0.12)',
								color: '#F1F5F9',
							}}
						/>
						<input
							type="email"
							required
							placeholder={t.contact.emailPlaceholder}
							className="w-full px-4 py-3 text-sm rounded transition-all duration-200 focus:outline-none focus:border-[#1D4ED8]"
							style={{
								backgroundColor: 'rgba(241,245,249,0.06)',
								border: '1px solid rgba(241,245,249,0.12)',
								color: '#F1F5F9',
							}}
						/>
						<textarea
							required
							rows={5}
							placeholder={t.contact.messagePlaceholder}
							className="w-full px-4 py-3 text-sm rounded transition-all duration-200 resize-none focus:outline-none focus:border-[#1D4ED8]"
							style={{
								backgroundColor: 'rgba(241,245,249,0.06)',
								border: '1px solid rgba(241,245,249,0.12)',
								color: '#F1F5F9',
							}}
						/>
						<button
							type="submit"
							disabled={sent}
							className="px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-2"
							style={{
							backgroundColor: '#2563EB',
							color: '#F8FAFC',
							}}
						>
							{sent ? (
								<>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									Sent
								</>
							) : (
								t.contact.send
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
