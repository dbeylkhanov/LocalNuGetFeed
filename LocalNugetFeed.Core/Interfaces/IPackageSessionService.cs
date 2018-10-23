using System.Collections.Generic;
using LocalNugetFeed.Core.Entities;

namespace LocalNugetFeed.Core.Interfaces
{
	public interface IPackageSessionService
	{
		/// <summary>
		/// Get packages from current session
		/// </summary>
		/// <returns></returns>
		IReadOnlyList<Package> Get();
		
		/// <summary>
		/// Add single package to session storage
		/// </summary>
		/// <param name="package">Package entity</param>
		void Set(Package package);

		/// <summary>
		/// Add multiple packages to session storage
		/// </summary>
		/// <param name="packages">packages</param>
		void Set(IEnumerable<Package> packages);
	}
}