export const fields = [
{
  code: '%H',
  name: 'commit hash',
  fullDescription: 'commit hash',
  description: '',
  identifier: 'commit_hash'
},
{
  code: '%h',
  name: 'abbreviated commit hash',
  fullDescription: 'abbreviated commit hash',
  description: '',
  identifier: 'commit_hash_abbreviated'
},
{
  code: '%T',
  name: 'tree hash',
  fullDescription: 'tree hash',
  description: '',
  identifier: 'tree_hash'
},
{
  code: '%t',
  name: 'abbreviated tree hash',
  fullDescription: 'abbreviated tree hash',
  description: '',
  identifier: 'tree_hash_abbreviated'
},
{
  code: '%P',
  name: 'parent hashes',
  fullDescription: 'parent hashes',
  description: '',
  identifier: 'parent_hashes'
},
{
  code: '%p',
  name: 'abbreviated parent hashes',
  fullDescription: 'abbreviated parent hashes',
  description: '',
  identifier: 'parent_hashes_abbreviated'
},
{
  code: '%an',
  name: 'author name',
  fullDescription: 'author name',
  description: '',
  identifier: 'author_name'
},
{
  code: '%aN',
  name: 'author name',
  fullDescription: 'author name (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  identifier: 'author_name_mailmap'
},
{
  code: '%ae',
  name: 'author email',
  fullDescription: 'author email',
  description: '',
  identifier: 'author_email'
},
{
  code: '%aE',
  name: 'author email',
  fullDescription: 'author email (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  identifier: 'author_email_mailmap'
},
// {
//  code: '%ad',
//  name: 'author date',
//  fullDescription: 'author date (format respects --date= option)',
//  description: ' (format respects --date= option)',
//  identifier: 'author_date_(format_respects_--date=_option)'
// },
// {
//  code: '%aD',
//  name: 'author date',
//  fullDescription: 'author date, RFC2822 style',
//  description: ', RFC2822 style',
//  identifier: 'author_date_RFC2822_style'
// },
{
  code: '%ar',
  name: 'author date',
  fullDescription: 'author date, relative',
  description: ', relative',
  identifier: 'author_date_relative'
},
// {
//  code: '%at',
//  name: 'author date',
//  fullDescription: 'author date, UNIX timestamp',
//  description: ', UNIX timestamp',
//  identifier: 'author_date_UNIX_timestamp'
// },
// {
//  code: '%ai',
//  name: 'author date',
//  fullDescription: 'author date, ISO 8601-like format',
//  description: ', ISO 8601-like format',
//  identifier: 'author_date_ISO_8601-like_format'
// },
{
  code: '%aI',
  name: 'author date',
  fullDescription: 'author date, strict ISO 8601 format',
  description: ', strict ISO 8601 format',
  identifier: 'author_date'
},
{
  code: '%cn',
  name: 'committer name',
  fullDescription: 'committer name',
  description: '',
  identifier: 'committer_name'
},
{
  code: '%cN',
  name: 'committer name',
  fullDescription: 'committer name (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  identifier: 'committer_name_mailmap'
},
{
  code: '%ce',
  name: 'committer email',
  fullDescription: 'committer email',
  description: '',
  identifier: 'committer_email'
},
{
  code: '%cE',
  name: 'committer email',
  fullDescription: 'committer email (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
  identifier: 'committer_email_mailmap'
},
// {
//  code: '%cd',
//  name: 'committer date',
//  fullDescription: 'committer date (format respects --date= option)',
//  description: ' (format respects --date= option)',
//  identifier: 'committer_date_(format_respects_--date=_option)'
// },
// {
//  code: '%cD',
//  name: 'committer date',
//  fullDescription: 'committer date, RFC2822 style',
//  description: ', RFC2822 style',
//  identifier: 'committer_date_RFC2822_style'
// },
{
  code: '%cr',
  name: 'committer date',
  fullDescription: 'committer date, relative',
  description: ', relative',
  identifier: 'committer_date_relative'
},
// {
//  code: '%ct',
//  name: 'committer date',
//  fullDescription: 'committer date, UNIX timestamp',
//  description: ', UNIX timestamp',
//  identifier: 'committer_date_UNIX_timestamp'
// },
// {
//  code: '%ci',
//  name: 'committer date',
//  fullDescription: 'committer date, ISO 8601-like format',
//  description: ', ISO 8601-like format',
//  identifier: 'committer_date_ISO_8601-like_format'
// },
{
  code: '%cI',
  name: 'committer date',
  fullDescription: 'committer date, strict ISO 8601 format',
  description: ', strict ISO 8601 format',
  identifier: 'committer_date'
},
// {
//  code: '%d',
//  name: 'ref names',
//  fullDescription: 'ref names, like the --decorate option of git-log[1]',
//  description: ', like the --decorate option of git-log[1]',
//  identifier: 'ref_names'
// },
{
  code: '%D',
  name: 'ref names without the "',
  fullDescription: 'ref names without the " (", ")" wrapping.',
  description: ' (", ")" wrapping.',
  identifier: 'ref_names'
},
{
  code: '%e',
  name: 'encoding',
  fullDescription: 'encoding',
  description: '',
  identifier: 'encoding'
},
{
  code: '%s',
  name: 'subject',
  fullDescription: 'subject',
  description: '',
  identifier: 'subject'
},
{
  code: '%f',
  name: 'sanitized subject line',
  fullDescription: 'sanitized subject line, suitable for a filename',
  description: ', suitable for a filename',
  identifier: 'subject_sanitized'
},
{
  code: '%b',
  name: 'body',
  fullDescription: 'body',
  description: '',
  identifier: 'body'
},
{
  code: '%B',
  name: 'raw body',
  fullDescription: 'raw body (unwrapped subject and body)',
  description: ' (unwrapped subject and body)',
  identifier: 'raw_body'
},
{
  code: '%N',
  name: 'commit notes',
  fullDescription: 'commit notes',
  description: '',
  identifier: 'commit_notes'
},
{
  code: '%GG',
  name: 'raw verification message from GPG for a signed commit',
  fullDescription: 'raw verification message from GPG for a signed commit',
  description: '',
  identifier: 'raw_GPG_verification_message'
},
{
  code: '%G?',
  name: 'show "G" for a good',
  fullDescription: 'show "G" for a good (valid) signature, "B" for a bad signature, "U" for a good signature with unknown validity, "X" for a good signature that has expired, "Y" for a good signature made by an expired key, "R" for a good signature made by a revoked key, "E" if the signature cannot be checked (e.g. missing key) and "N" for no signature',
  description: ' (valid) signature, "B" for a bad signature, "U" for a good signature with unknown validity, "X" for a good signature that has expired, "Y" for a good signature made by an expired key, "R" for a good signature made by a revoked key, "E" if the signature cannot be checked (e.g. missing key) and "N" for no signature',
  identifier: 'signature_validity'
},
{
  code: '%GS',
  name: 'show the name of the signer for a signed commit',
  fullDescription: 'show the name of the signer for a signed commit',
  description: '',
  identifier: 'signer_name'
},
{
  code: '%GK',
  name: 'show the key used to sign a signed commit',
  fullDescription: 'show the key used to sign a signed commit',
  description: '',
  identifier: 'key'
},
// {
//  code: '%gD',
//  name: 'reflog selector',
//  fullDescription: 'reflog selector, e.g., refs/stash@{1} or refs/stash@{2 minutes ago}; the format follows the rules described for the -g option. The portion before the @ is the refname as given on the command line (so git log -g refs/heads/master would yield refs/heads/master@{0}).',
//  description: ', e.g., refs/stash@{1} or refs/stash@{2 minutes ago}; the format follows the rules described for the -g option. The portion before the @ is the refname as given on the command line (so git log -g refs/heads/master would yield refs/heads/master@{0}).',
//  identifier: 'reflog_selector'
// },
// {
//  code: '%gd',
//  name: 'shortened reflog selector',
//  fullDescription: 'shortened reflog selector; same as %gD, but the refname portion is shortened for human readability (so refs/heads/master becomes just master).',
//  description: '; same as %gD, but the refname portion is shortened for human readability (so refs/heads/master becomes just master).',
//  identifier: 'shortened_reflog_selector'
// },
// {
//  code: '%gn',
//  name: 'reflog identity name',
//  fullDescription: 'reflog identity name',
//  description: '',
//  identifier: 'reflog_identity_name'
// },
// {
//  code: '%gN',
//  name: 'reflog identity name',
//  fullDescription: 'reflog identity name (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
//  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
//  identifier: 'reflog_identity_name_mailmap'
// },
// {
//  code: '%ge',
//  name: 'reflog identity email',
//  fullDescription: 'reflog identity email',
//  description: '',
//  identifier: 'reflog_identity_email'
// },
// {
//  code: '%gE',
//  name: 'reflog identity email',
//  fullDescription: 'reflog identity email (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
//  description: ' (respecting .mailmap, see git-shortlog[1] or git-blame[1])',
//  identifier: 'reflog_identity_email_mailmap'
// },
// {
//  code: '%gs',
//  name: 'reflog subject',
//  fullDescription: 'reflog subject',
//  description: '',
//  identifier: 'reflog_subject'
// }
];

const formatString = exports.formatString = fields.map(field =>
  `${ field.code }%x00`
).join('');