const urls = 
[
    'http://ijse.lk',
    'https://blog.ijse.lk/web/blog',
    'https://s3.google.com/search',
    'https://ikman.lk',
    'http://google.uk/search/q=ijse',
    'https://www.daraz.in'
];

// 1. List all the top level domains
// 2. List all the domain names

/* RESULT:=
 'http://ijse.lk', topLevelDomain = 'lk', domainName = 'ijse'
 'https://blog.ijse.lk/web/blog', topLevelDomain = 'lk', domainName = 'ijse'
 'https://s3.google.com/search', topLevelDomain = 'com', domainName = 'google'
 'https://ikman.lk', topLevelDomain = 'lk', domainName = 'ikman'
 'http://google.uk/search/q=ijse', topLevelDomain = 'uk', domainName = 'google'
 'https://www.daraz.in', topLevelDomain = 'in', domainName = 'daraz'
*/

urls.forEach(url => {
    const regExp = /(?<http>http[s]?):\/\/((?<sd>.+)[.])?(?<domain>.+)[.](?<td>[a-z]{2,4})(\/.*)?/;
    const result = regExp.exec(url);
    // console.log(result);
    console.log(url);
    console.log('topLevelDomain=', result.groups.td);
    console.log('domainName=', result.groups.domain);
    console.log('subDomain=', result.groups.sd);
    console.log('https=', result[1].endsWith('s'));
    console.log("-----------------");
});

const texts = [
    'S001-123456789V-Kasun Sampath',
    'S002-456789123v-Nuwan',
    'S003-789456123V-Upul Madushanka'
];

texts.forEach(text => {
    const regExp = /(?<id>S\d{3})-(?<nic>\d{9}[Vv])-(?<name>[A-Za-z ]+)/;
    // const result = regExp.exec(text);
    const result = text.match(regExp);
    console.log(text)
    console.log(`id=`, result.groups.id, result[1]);
    console.log(`nic=`, result.groups.nic, result[2]);
    console.log(`name=`, result.groups.name, result[3]);
    console.log("-------------------------");
});