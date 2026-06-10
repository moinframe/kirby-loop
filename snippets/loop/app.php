<?php

use Kirby\Cms\App as Kirby;
use \Moinframe\Loop\Options;

/**
 * Helper function to get translated strings with custom language support
 * This method only overwrites the translations, the language on the loop needs to stay null if no language is set, otherwise the api won't work
 * @return array<string, string> Translations
 *
 */
function getTranslations(): array
{
    $customLang = Options::language();

    return [
        'ui.comment.placeholder' => t('moinframe.loop.ui.comment.placeholder', 'Enter your comment...', $customLang),
        'ui.comment.submit' => t('moinframe.loop.ui.comment.submit', 'Submit', $customLang),
        'ui.comment.cancel' => t('moinframe.loop.ui.comment.cancel', 'Cancel', $customLang),
        'ui.comment.keyboardHint' => t('moinframe.loop.ui.comment.keyboardHint', '⌘+Enter or Ctrl+Enter to submit', $customLang),
        'ui.comment.maker.aria.label' => t('moinframe.loop.ui.comment.maker.aria.label', 'Jump to marker', $customLang),
        'ui.comment.summary.aria.label' => t('moinframe.loop.ui.comment.summary.aria.label', 'Comment by', $customLang),
        'ui.reply.aria.label' => t('moinframe.loop.ui.reply.aria.label', 'Reply by', $customLang),
        'ui.comment.replies.aria.label' => t('moinframe.loop.ui.comment.replies.aria.label', 'Show replies', $customLang),
        'ui.reply.placeholder' => t('moinframe.loop.ui.reply.placeholder', 'Write a reply...', $customLang),
        'ui.reply.submit' => t('moinframe.loop.ui.reply.submit', 'Reply', $customLang),
        'ui.panel.no.comments' => t('moinframe.loop.ui.panel.no.comments', 'No comments yet. Add your first comment to get started.', $customLang),
        'ui.header.browse.mode' => t('moinframe.loop.ui.header.browse.mode', 'Browse', $customLang),
        'ui.header.comment.mode' => t('moinframe.loop.ui.header.comment.mode', 'Comment', $customLang),
        'ui.header.aria.count' => t('moinframe.loop.ui.header.aria.count', 'unresolved comments', $customLang),
        'ui.welcome.guest.name.placeholder' => t('moinframe.loop.ui.welcome.guest.name.placeholder', 'Enter your name', $customLang),
        'ui.welcome.continue' => t('moinframe.loop.ui.welcome.continue', 'Continue', $customLang),
        'ui.welcome.dismiss' => t('moinframe.loop.ui.welcome.dismiss', 'Dismiss', $customLang),
        'ui.comment.mark.solved' => t('moinframe.loop.ui.comment.mark.solved', 'Resolve', $customLang),
        'ui.comment.mark.unsolved' => t('moinframe.loop.ui.comment.mark.unsolved', 'Reopen', $customLang),
        'ui.panel.show.resolved' => t('moinframe.loop.ui.panel.show.resolved', 'Show Resolved Only', $customLang),
        'ui.panel.show.all' => t('moinframe.loop.ui.panel.show.all', 'Show All Comments', $customLang),
        'ui.panel.open' => t('moinframe.loop.ui.panel.open', 'Open comments', $customLang),
        'ui.panel.filter.open' => t('moinframe.loop.ui.panel.filter.open', 'Open', $customLang),
        'ui.panel.filter.resolved' => t('moinframe.loop.ui.panel.filter.resolved', 'Resolved', $customLang),
        'ui.panel.filter.open.active' => t('moinframe.loop.ui.panel.filter.open.active', 'Show open comments (currently selected)', $customLang),
        'ui.panel.filter.open.inactive' => t('moinframe.loop.ui.panel.filter.open.inactive', 'Show open comments', $customLang),
        'ui.panel.filter.resolved.active' => t('moinframe.loop.ui.panel.filter.resolved.active', 'Show resolved comments (currently selected)', $customLang),
        'ui.panel.filter.resolved.inactive' => t('moinframe.loop.ui.panel.filter.resolved.inactive', 'Show resolved comments', $customLang),
        'ui.panel.menu.open' => t('moinframe.loop.ui.panel.menu.open', 'Open menu', $customLang),
        'ui.panel.menu.filter.title' => t('moinframe.loop.ui.panel.menu.filter.title', 'Show Comments', $customLang),
        'ui.panel.no.resolved' => t('moinframe.loop.ui.panel.no.resolved', 'No resolved comments yet.', $customLang),

        // Time formatting
        'ui.time.just_now' => t('moinframe.loop.ui.time.just_now', 'just now', $customLang),
        'ui.time.minute_ago' => t('moinframe.loop.ui.time.minute_ago', 'a minute ago', $customLang),
        'ui.time.minutes_ago' => t('moinframe.loop.ui.time.minutes_ago', '{count} minutes ago', $customLang),
        'ui.time.hour_ago' => t('moinframe.loop.ui.time.hour_ago', 'an hour ago', $customLang),
        'ui.time.hours_ago' => t('moinframe.loop.ui.time.hours_ago', '{count} hours ago', $customLang),
        'ui.time.yesterday' => t('moinframe.loop.ui.time.yesterday', 'yesterday', $customLang),
        'ui.time.days_ago' => t('moinframe.loop.ui.time.days_ago', '{count} days ago', $customLang)
    ];
}

if (Options::enabled() && (Options::public() || kirby()->user() !== null)): ?>
    <kirby-loop
        theme="<?= Options::theme() ?>"
        csrf-token="<?= csrf() ?>"
        position="<?= Options::position() ?>"
        language="<?= kirby()->language() ? kirby()->language()->code() : '' ?>"
        apiBase="<?= kirby()->site()->url() ?>"
        pageId="<?= page()->id() ?>"
        authenticated="<?= kirby()->user() !== null ? 'true' : 'false' ?>"
        welcome-enabled="<?= Options::welcomeDialogEnabled() ? 'true' : 'false' ?>"
        welcome-headline="<?= esc(Options::welcomeDialogHeadline()) ?>"
        welcome-text="<?= esc(Options::welcomeDialogText()) ?>"
        translations="<?= esc(json_encode(getTranslations())) ?>"></kirby-loop>
    <script type="module" src="<?= Kirby::plugin('moinframe/loop')->asset('loop.js') ?>"></script>
<?php endif ?>